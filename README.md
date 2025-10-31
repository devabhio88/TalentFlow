# TalentFlow

TalentFlow is a modern recruiting and talent management platform designed to streamline the hiring process from job posting to candidate assessment.


## Overview

TalentFlow provides a comprehensive suite of integrated tools for talent acquisition teams:

- **Intuitive Dashboard** for at-a-glance recruiting metrics
- **Kanban & List Views** for flexible candidate management
- **Job Posting Management** with customizable requirements
- **Assessment Builder** for skills evaluation
- **Interactive Timeline** for candidate history tracking

## Key Features

### 1. Candidate Management

Easily track candidates through every stage of your hiring pipeline with flexible views and powerful filtering tools.

**Features include:**
- Drag-and-drop stage management
- Customizable candidate cards
- @mention-enabled notes system
- Timeline view for activity history
- Skills-based filtering and search
- Interview scheduling tools

### 2. Job Management

Create, organize, and track job postings with comprehensive details and applicant tracking.


**Features include:**
- Comprehensive job listing management
- Status tracking (Open, Filled, On Hold)
- Customizable job requirements
- Applicant tracking and progression
- Advanced filtering and search capabilities
- Drag-and-drop priority ordering

### 3. Assessment Builder

Create customized assessments to evaluate candidate skills and qualifications.

**Features include:**
- Multiple question formats (multiple choice, text)
- Customizable scoring systems
- Preview mode for testing assessments
- Candidate-specific assessment assignment
- Results tracking and analysis

## Tech Stack

TalentFlow leverages modern web technologies for performance and flexibility:

- **Frontend**: React 18 with functional components and hooks
- **Build System**: Vite for lightning-fast development
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Query for server state, local React state
- **Data Storage**: IndexedDB via Dexie.js for client-side persistence
- **Mock Backend**: MSW (Mock Service Worker) for API simulation
- **UI Components**: Custom component library with Lucide icons
- **Drag and Drop**: @hello-pangea/dnd for intuitive interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/devabhio88/talentflow.git
   cd talentflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🧰 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── assessments/ # Assessment-related components
│   ├── candidates/  # Candidate management components
│   ├── jobs/        # Job listing components
│   └── ui/          # Core UI elements
├── data/          # Seed data for development
├── pages/         # Route-based page components
├── services/      # API and data management
└── main.jsx       # Application entry point
```

## 📊 Working with Mock Data

TalentFlow uses MSW to simulate a backend API with data stored in IndexedDB:

- Full application workflow without requiring a real backend
- Persistent data between browser sessions
- Realistic API behavior with configurable latency

To reset data, clear your browser's IndexedDB storage through developer tools.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Mock Service Worker](https://mswjs.io/)
- [Dexie.js](https://dexie.org/)
- [React Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

## 🔮 Future Roadmap

- Enhanced analytics dashboard
- Email notification system
- Calendar integration
- Mobile application
- Dark mode support
- Advanced reporting tools
