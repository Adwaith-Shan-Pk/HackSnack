import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // --- THIS IS THE DEBUGGING LINE ---
        // It will print the API URL to your browser's console.
        console.log('Attempting to use API URL:', import.meta.env.VITE_API_URL);

        // Vite uses import.meta.env for environment variables
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const response = await fetch(`${apiUrl}/api/projects`);
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(`Failed to load projects. ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            My Work & Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            A collection of my latest work and case studies.
          </p>
        </div>

        {loading && <p className="text-center text-lg">Loading projects...</p>}
        {error && <p className="text-center text-red-400 bg-red-900/50 p-4 rounded-md">{error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

