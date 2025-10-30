import { nanoid } from 'nanoid';

export const STAGES = {
  APPLIED: 'applied',
  SCREEN: 'screen',
  TECH: 'tech',
  OFFER: 'offer',
  HIRED: 'hired',
  REJECTED: 'rejected'
};

export const stagesList = [
  STAGES.APPLIED,
  STAGES.SCREEN,
  STAGES.TECH, 
  STAGES.OFFER,
  STAGES.HIRED,
  STAGES.REJECTED
];

export const JOB_STATUS = {
  OPEN: 'open',
  CLOSED: 'closed',
  DRAFT: 'draft',
  ARCHIVED: 'archived'
};

const jobTitles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Data Scientist',
  'Product Manager',
  'UX Designer',
  'UI Designer',
  'QA Engineer',
  'Mobile Developer',
  'Machine Learning Engineer',
  'Security Engineer',
  'Technical Writer',
  'Sales Engineer',
  'Customer Success Manager',
  'Marketing Manager',
  'HR Specialist',
  'Financial Analyst',
  'Operations Manager',
  'Business Analyst',
  'Project Manager',
  'Scrum Master',
  'Solutions Architect',
  'Database Administrator',
  'System Administrator'
];

const techTags = [
  'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'TypeScript',
  'JavaScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB',
  'GraphQL', 'REST', 'Git', 'Agile', 'Remote', 'Senior', 'Junior'
];

const skillsList = [
  'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Node.js', 
  'Express', 'Next.js', 'Python', 'Django', 'Flask', 'Ruby', 'Rails',
  'Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Laravel', 'Go', 'Rust',
  'Swift', 'Kotlin', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
  'CI/CD', 'GraphQL', 'REST API', 'SQL', 'NoSQL', 'MongoDB', 'PostgreSQL',
  'MySQL', 'Redis', 'Kafka', 'RabbitMQ', 'Microservices', 'TDD', 'Agile',
  'Scrum', 'UI/UX', 'CSS', 'SASS', 'LESS', 'Tailwind', 'Bootstrap'
];

const stages = stagesList;

const firstNames = [
  "Aarav",
  "Vihaan",
  "Arjun",
  "Ishaan",
  "Rohan",
  "Advait",
  "Aanya",
  "Diya",
  "Ananya",
  "Ira",
  "Aadhya",
  "Kavya",
  "Meera",
  "Sneha",
  "Riya",
  "Aradhya",
  "Ritika",
  "Tanvi",
  "Nisha",
  "Aarohi",
];

const lastNames = [
  "Sharma",
  "Verma",
  "Gupta",
  "Patel",
  "Reddy",
  "Nair",
  "Iyer",
  "Menon",
  "Agarwal",
  "Kumar",
  "Yadav",
  "Chopra",
  "Singh",
  "Khan",
  "Shetty",
  "Das",
  "Ghosh",
  "Mishra",
  "Rao",
  "Bose",
];


const jobs = jobTitles.map((title, index) => {
  let status;
  const rand = Math.random();
  if (rand < 0.6) {
    status = JOB_STATUS.OPEN;
  } else if (rand < 0.8) {
    status = JOB_STATUS.CLOSED;
  } else if (rand < 0.9) {
    status = JOB_STATUS.DRAFT;
  } else {
    status = JOB_STATUS.ARCHIVED;
  }

  const jobId = `JOB-2025-${String(index + 1).padStart(3, '0')}`;
  
  const minSalary = 500000 + Math.floor(Math.random() * 1000000); 
  const maxSalary = minSalary + Math.floor(Math.random() * 500000); 
  const ctc = {
    currency: 'INR',
    min: minSalary,
    max: maxSalary,
    period: 'yearly'
  };

  return {
    id: index + 1,
    jobId: jobId,
    title,
    slug: title.toLowerCase().replace(/\s+/g, '-'),
    status,
    order: index + 1,
    ctc: ctc,
    tags: Array.from(
      { length: Math.floor(Math.random() * 4) + 2 },
      () => techTags[Math.floor(Math.random() * techTags.length)]
    ).filter((tag, i, arr) => arr.indexOf(tag) === i),
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
    description: `We are hiring a ${title} to join our engineering team in India. You will work with cutting-edge technologies and collaborate with top Indian talent.`,
    requirements: [
      "Bachelor's degree in Computer Science, IT, or a related field",
      "3+ years of relevant experience in Indian or global companies",
      "Strong communication and problem-solving skills",
      "Experience with modern development tools and frameworks"
    ]
  };
});

const candidates = [];
for (let i = 1; i <= 1000; i++) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const jobId = Math.floor(Math.random() * jobs.length) + 1;

  const numSkills = Math.floor(Math.random() * 4) + 2;
  const candidateSkills = [];

  for (let j = 0; j < numSkills; j++) {
    const skill = skillsList[Math.floor(Math.random() * skillsList.length)];
    if (!candidateSkills.includes(skill)) {
      candidateSkills.push(skill);
    }
  }

  const indianCities = ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Chennai", "Delhi", "Noida", "Gurgaon", "Kolkata", "Ahmedabad"];

  candidates.push({
    id: i,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.in`,
    stage: stages[Math.floor(Math.random() * stages.length)],
    jobId,
    createdAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString(),
    phone: `+91-${Math.floor(6000000000 + Math.random() * 4000000000)}`,
    location: indianCities[Math.floor(Math.random() * indianCities.length)],
    experience: Math.floor(Math.random() * 10) + 1,
    skills: candidateSkills
  });
}

const timeline = [];
candidates.forEach(candidate => {
  const stageIndex = stages.indexOf(candidate.stage);
  for (let i = 0; i <= stageIndex; i++) {
    timeline.push({
      id: nanoid(),
      candidateId: candidate.id,
      stage: stages[i],
      timestamp: new Date(
        new Date(candidate.createdAt).getTime() + i * 24 * 60 * 60 * 1000
      ).toISOString(),
      notes: `Moved to ${stages[i]} stage`
    });
  }
});

const questionTypes = [
  "single-choice",
  "multi-choice",
  "short-text",
  "long-text",
  "numeric",
  "file-upload"
];

const sampleQuestions = {
  "single-choice": [
    {
      question: "How many years of experience do you have with React?",
      options: ["0-1 years", "2-3 years", "4-5 years", "5+ years"],
      required: true
    },
    {
      question: "What is your preferred development environment?",
      options: ["VS Code", "IntelliJ", "Vim/Neovim", "Other"],
      required: false
    }
  ],
  "multi-choice": [
    {
      question: "Which technologies have you worked with? (Select all that apply)",
      options: ["React", "Vue", "Angular", "Node.js", "Python", "Java"],
      required: true
    }
  ],
  "short-text": [
    {
      question: "What is your current job title?",
      maxLength: 100,
      required: true
    },
    {
      question: "Which Indian city are you currently based in?",
      maxLength: 50,
      required: false
    }
  ],
  "long-text": [
    {
      question: "Describe your most challenging project and how you solved it.",
      maxLength: 1000,
      required: true
    },
    {
      question: "What are your career goals for the next 5 years?",
      maxLength: 500,
      required: false
    }
  ],
  "numeric": [
    {
      question: "What is your expected annual salary (in LPA)?",
      min: 3,
      max: 60,
      required: true
    }
  ],
  "file-upload": [
    {
      question: "Please upload your updated resume (PDF preferred)",
      acceptedTypes: [".pdf", ".doc", ".docx"],
      required: true
    }
  ]
};

const assessments = jobs.slice(0, 3).map((job, index) => ({
  id: index + 1,
  jobId: job.id,
  title: `${job.title} Assessment`,
  sections: [
    {
      id: nanoid(),
      title: "Personal Background",
      questions: [
        {
          id: nanoid(),
          type: "single-choice",
          ...sampleQuestions["single-choice"][0]
        },
        {
          id: nanoid(),
          type: "short-text",
          ...sampleQuestions["short-text"][0]
        },
        {
          id: nanoid(),
          type: "multi-choice",
          ...sampleQuestions["multi-choice"][0]
        }
      ]
    },
    {
      id: nanoid(),
      title: "Technical Questions",
      questions: [
        {
          id: nanoid(),
          type: "long-text",
          ...sampleQuestions["long-text"][0]
        },
        {
          id: nanoid(),
          type: "numeric",
          ...sampleQuestions["numeric"][0]
        },
        {
          id: nanoid(),
          type: "file-upload",
          ...sampleQuestions["file-upload"][0]
        }
      ]
    }
  ],
  createdAt: new Date().toISOString()
}));

export const seedJobs = [
  {
    title: "Frontend Developer",
    company: "TechNova India Pvt Ltd",
    location: "Bengaluru, Karnataka",
    description: "We're hiring a Frontend Developer skilled in React and TypeScript to build modern interfaces.",
    requirements: "3+ years of experience in React, JavaScript, HTML, and CSS.",
    salary: "₹10,00,000 - ₹18,00,000 per annum",
    status: "open"
  },
  {
    title: "Backend Engineer",
    company: "DataWave Technologies",
    location: "Hyderabad, Telangana",
    description: "Looking for a Backend Engineer proficient in Node.js, Express, and PostgreSQL.",
    requirements: "Strong backend development experience and REST API design knowledge.",
    salary: "₹12,00,000 - ₹20,00,000 per annum",
    status: "open"
  },
  {
    title: "UX Designer",
    company: "CreativeLabs India",
    location: "Mumbai, Maharashtra",
    description: "We're seeking a UX Designer to create intuitive, user-friendly digital experiences.",
    requirements: "Portfolio demonstrating UX research and interaction design expertise.",
    salary: "₹8,00,000 - ₹15,00,000 per annum",
    status: "closed"
  },
  {
    title: "DevOps Engineer",
    company: "CloudForge Solutions",
    location: "Pune, Maharashtra",
    description: "DevOps Engineer with experience in AWS, Docker, and CI/CD pipelines.",
    requirements: "4+ years of hands-on DevOps experience in Indian or global SaaS companies.",
    salary: "₹14,00,000 - ₹22,00,000 per annum",
    status: "open"
  },
  {
    title: "Product Manager",
    company: "Innovate India Pvt Ltd",
    location: "Gurgaon, Haryana",
    description: "Product Manager responsible for leading cross-functional product development teams.",
    requirements: "5+ years of product management experience in tech startups or IT firms.",
    salary: "₹18,00,000 - ₹30,00,000 per annum",
    status: "draft"
  }
];

export const seedCandidates = [
  {
    name: "Rohan Sharma",
    email: "rohan.sharma@example.in",
    phone: "+91-9876543210",
    location: "Bengaluru, Karnataka",
    status: "active",
    stage: "applied",
    jobId: 1,
    resume: "Rohan_Sharma_Resume.pdf",
    coverLetter: "Excited to apply for the Frontend Developer role at TechNova India.",
    skills: ["React", "JavaScript", "HTML", "CSS", "TypeScript"]
  },
  {
    name: "Ananya Patel",
    email: "ananya.patel@example.in",
    phone: "+91-9876501234",
    location: "Hyderabad, Telangana",
    status: "active",
    stage: "screen",
    jobId: 1,
    resume: "Ananya_Patel_Resume.pdf",
    coverLetter: "I'm confident my skills align perfectly with your frontend engineering needs.",
    skills: ["React", "Redux", "JavaScript", "Node.js", "MongoDB"]
  },
  {
    name: "Arjun Verma",
    email: "arjun.verma@example.in",
    phone: "+91-9786512345",
    location: "Pune, Maharashtra",
    status: "active",
    stage: "tech",
    jobId: 2,
    resume: "Arjun_Verma_Resume.pdf",
    coverLetter: "Backend Engineer with a strong track record in building scalable APIs.",
    skills: ["Node.js", "Express", "PostgreSQL", "AWS", "Docker"]
  },
  {
    name: "Isha Reddy",
    email: "isha.reddy@example.in",
    phone: "+91-9898123456",
    location: "Mumbai, Maharashtra",
    status: "active",
    stage: "offer",
    jobId: 3,
    resume: "Isha_Reddy_Resume.pdf",
    coverLetter: "Passionate UX Designer creating impactful designs for Indian users.",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    name: "Rahul Nair",
    email: "rahul.nair@example.in",
    phone: "+91-9867123456",
    location: "Pune, Maharashtra",
    status: "active",
    stage: "rejected",
    jobId: 4,
    resume: "Rahul_Nair_Resume.pdf",
    coverLetter: "Experienced DevOps engineer skilled in AWS and Kubernetes.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    name: "Priya Gupta",
    email: "priya.gupta@example.in",
    phone: "+91-9811123456",
    location: "Gurgaon, Haryana",
    status: "active",
    stage: "applied",
    jobId: 5,
    resume: "Priya_Gupta_Resume.pdf",
    coverLetter: "Product Manager passionate about building user-centric digital products.",
    skills: ["Product Strategy", "User Stories", "Agile", "Market Research"]
  }
];

export const seedAssessments = [
  {
    title: "Frontend Developer Assessment",
    description: "Technical assessment for frontend developer candidates in India",
    candidateId: 1,
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        text: "Which of the following is NOT a JavaScript framework or library?",
        options: ["React", "Vue", "Angular", "Jakarta"],
        correctAnswer: "Jakarta"
      },
      {
        id: 2,
        type: "text",
        text: "Explain the concept of closures in JavaScript.",
        sampleAnswer: "A closure is the combination of a function and references to its lexical scope."
      }
    ]
  },
  {
    title: "Backend Developer Assessment",
    description: "Technical assessment for backend developer candidates in India",
    candidateId: 2,
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        text: "Which of these is NOT a common database system?",
        options: ["MongoDB", "PostgreSQL", "MySQL", "WebSQL"],
        correctAnswer: "WebSQL"
      },
      {
        id: 2,
        type: "text",
        text: "Explain the difference between SQL and NoSQL databases.",
        sampleAnswer: "SQL databases are relational with schemas, while NoSQL databases are flexible and document-oriented."
      }
    ]
  }
];

export const seedData = {
  jobs,
  candidates,
  timeline,
  assessments
};
