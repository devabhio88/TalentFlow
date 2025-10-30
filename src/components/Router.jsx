import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import JobsPage from '../pages/JobsPage';
import JobDetailPage from '../pages/JobDetailPage';
import CandidatesPage from '../pages/CandidatesPage';
import CandidateDetailPage from '../pages/CandidateDetailPage';
import AssessmentsPage from '../pages/AssessmentsPage';
import ErrorBoundary from './ErrorBoundary';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ErrorBoundary>
          <JobsPage />
        </ErrorBoundary>
      } />
      <Route path="/jobs/:id" element={
        <ErrorBoundary>
          <JobDetailPage />
        </ErrorBoundary>
      } />
      <Route path="/candidates" element={
        <ErrorBoundary>
          <CandidatesPage />
        </ErrorBoundary>
      } />
      <Route path="/candidates/:candidateId" element={
        <ErrorBoundary>
          <CandidateDetailPage />
        </ErrorBoundary>
      } />
      <Route path="/assessments" element={
        <ErrorBoundary>
          <AssessmentsPage />
        </ErrorBoundary>
      } />
      <Route path="/jobs/:jobId/assessments" element={
        <ErrorBoundary>
          <AssessmentsPage />
        </ErrorBoundary>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
