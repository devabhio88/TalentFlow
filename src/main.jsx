import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { worker } from './services/mockServer.js'
import { initializeDatabase, checkDatabaseHealth } from './services/database.js'
import { Toaster, toast } from 'react-hot-toast'

async function startApp() {
  let dbInitialized = false;
  
  try {
    dbInitialized = await initializeDatabase();
    
    const healthCheck = await checkDatabaseHealth();
    
    if (!healthCheck.isHealthy && process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        toast.warning('Limited data availability.', {
          duration: 5000,
        });
      }, 2000);
    }
    
    if (!dbInitialized && process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        toast.error('Database initialization issue.', {
          duration: 5000,
        });
      }, 2000);
    }
  } catch (error) {
    console.error('Failed to initialize database:', error);
    if (process.env.NODE_ENV === 'production') {
      setTimeout(() => {
        toast.error('Database error. Please try refreshing the page.', {
          duration: 5000,
        });
      }, 2000);
    }
  }
  
  if (process.env.NODE_ENV !== 'production') {
    try {
      await worker.start({
        onUnhandledRequest: 'bypass', 
      })
    } catch (error) {
      console.error('Failed to start MSW worker:', error);
    }
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Toaster position="top-right" />
      <App />
    </React.StrictMode>
  )
}

startApp()