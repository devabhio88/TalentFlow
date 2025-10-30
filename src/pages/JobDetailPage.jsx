import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getJob, updateJob, deleteJob } from '../services/api';
import { ArrowLeft, Edit, Trash, Clock, MapPin, Users, Building, ChevronDown } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import JobModal from '../components/jobs/JobModal';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { formatDistanceToNow } from 'date-fns';

function isValidDate(dateString) {
  if (!dateString) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case 'open':
      return 'bg-green-100 text-green-800';
    case 'closed':
      return 'bg-red-100 text-red-800';
    case 'draft':
      return 'bg-yellow-100 text-yellow-800';
    case 'archived':
      return 'bg-slate-100 text-slate-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

const JOB_STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'open', label: 'Open' },
  { value: 'closed', label: 'Closed' },
  { value: 'draft', label: 'Draft' },
  { value: 'archived', label: 'Archived' },
];

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', id],
    queryFn: () => getJob(id),
    select: (data) => {
      if (!data) return null;
      return {
        ...data,
        requirements: Array.isArray(data.requirements) ? data.requirements : []
      };
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['job', id]);
      queryClient.invalidateQueries(['jobs']);
      setIsEditModalOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['jobs']);
      navigate('/jobs');
    },
  });

  const handleEditJob = (updatedJob) => {
    updateMutation.mutate(updatedJob);
  };

  const handleDeleteJob = () => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      deleteMutation.mutate(job.id);
    }
  };

  const handleStatusChange = (newStatus) => {
    const updatedJob = { ...job, status: newStatus };
    updateMutation.mutate(updatedJob);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">Error loading job</h2>
        <p className="mt-2 text-slate-300">{error.message}</p>
        <Button onClick={() => navigate('/jobs')} className="mt-4">
          Back to Jobs
        </Button>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <Button onClick={() => navigate('/jobs')} className="mt-4">
          Back to Jobs
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="md:w-[75vw] mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/jobs')} 
          className="flex items-center text-slate-300 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Jobs
        </button>

        <div className="bg-transparent border-blue-600 border rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white">{job.title}</h1>
              {job.status && (
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles(job.status)}`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <select
                  value={job.status || 'open'}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className={`px-3 py-2 border rounded-md text-sm font-medium ${getStatusStyles(job.status)} appearance-none pr-8`}
                >
                  {JOB_STATUS_OPTIONS.filter(option => option.value !== 'all').map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsEditModalOpen(true)}
                leftIcon={<Edit size={16} />}
              >
                Edit
              </Button>
              <Button 
                variant="outline" 
                className="text-red-600 hover:bg-red-50 border-red-300"
                onClick={handleDeleteJob}
                leftIcon={<Trash size={16} />}
                isLoading={deleteMutation.isLoading}
              >
                Delete
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            {job.department && (
              <div className="flex items-center text-slate-300">
                <Building size={18} className="mr-2" />
                <span>{job.department}</span>
              </div>
            )}
            {job.location && (
              <div className="flex items-center text-slate-300">
                <MapPin size={18} className="mr-2" />
                <span>{job.location}</span>
              </div>
            )}
            <div className="flex items-center text-slate-300">
              <Clock size={18} className="mr-2" />
              <span>
                {job.createdAt && isValidDate(job.createdAt)
                  ? `Posted ${formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}`
                  : 'Posted recently'}
              </span>
            </div>
            <div className="flex items-center text-slate-300">
              <Users size={18} className="mr-2" />
              <span>{job.applicants || 0} applicants</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-white">
            {job.tags && job.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Job Description</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line  text-white">{job.description}</p>
            </div>
          </div>

          {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-white">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-gray-200">{req}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-6 border-t">
            <Button size="lg" className="w-full sm:w-auto">
              Apply for this position
            </Button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <JobModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEditJob}
          job={job}
          isLoading={updateMutation.isLoading}
        />
      )}
    </>
  );
};

export default JobDetailPage;