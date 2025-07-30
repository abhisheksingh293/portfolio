import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Real projects data (replace with dynamic fetch if needed)

// Real projects data (replace with dynamic fetch if needed)
const projectsData = [
  {
    title: 'Todo-List',
    description: 'A simple todo list app to manage daily tasks.',
    techStack: ['CSS (49.8%)', 'JavaScript (34.8%)', 'HTML (15.4%)'],
    github: 'https://github.com/abhisheksingh293/Todo-List',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/Todo-List/'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Classic game built with JavaScript.',
    techStack: ['JavaScript (39.4%)', 'CSS (37.3%)', 'HTML (23.3%)'],
    github: 'https://github.com/abhisheksingh293/Rock_Paper_Scissors',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/Rock_Paper_Scissors/'
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes for any text or URL.',
    techStack: ['CSS (54.4%)', 'JavaScript (28.5%)', 'HTML (17.1%)'],
    github: 'https://github.com/abhisheksingh293/qr-code-generator',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/qr-code-generator/'
  },
  {
    title: 'NIT-Jamshedpur',
    description: 'Portfolio site for NIT Jamshedpur.',
    techStack: ['HTML (63.0%)', 'CSS (34.2%)', 'JavaScript (2.8%)'],
    github: 'https://github.com/abhisheksingh293/NIT-Jamshedpur',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/NIT-Jamshedpur/'
  },
  {
    title: 'Melodies of India',
    description: 'Music themed project with CSS animations.',
    techStack: ['CSS (52.6%)', 'HTML (47.4%)'],
    github: 'https://github.com/abhisheksingh293/Melodies-of-india',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/Melodies-of-india/'
  },
  {
    title: 'Collage Event Management System',
    description: 'Event management platform for colleges.',
    techStack: ['HTML (40.8%)', 'JavaScript (40.5%)', 'CSS (18.7%)'],
    github: 'https://github.com/abhisheksingh293/Collage-Event-Management-System',
    category: 'Frontend',
    live: 'https://abhisheksingh293.github.io/Collage-Event-Management-System/'
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const categoryOptions = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="w-full min-h-screen bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a084fa] via-[#2cb67d] to-[#00cfff] drop-shadow-[0_4px_24px_rgba(10,16,38,0.9)] text-center filter brightness-125">
        Projects
      </h2>
      <div className="flex gap-4 mb-10 flex-wrap justify-center">
        {categoryOptions.map(option => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-5 py-2 rounded-full font-semibold border-2 transition-all text-base focus:outline-none focus:ring-2 focus:ring-[#7f5af0] shadow-md
              ${filter === option
                ? 'bg-[#7f5af0] text-white border-[#7f5af0]'
                : 'bg-[#232946] text-[#b8c1ec] border-[#7f5af0]/40 hover:bg-[#2cb67d] hover:text-white hover:border-[#2cb67d]'}`}
            aria-pressed={filter === option}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/10 backdrop-blur-lg border-2 border-[#7f5af0]/30 shadow-xl p-7 group hover:scale-105 hover:shadow-2xl hover:border-[#2cb67d] transition-all relative"
          >
            <h3 className="text-2xl font-bold text-[#eaeaea] mb-2 group-hover:text-[#2cb67d] transition-colors">{project.title}</h3>
            <p className="mb-4 text-[#b8c1ec]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-[#232946]/80 text-[#7f5af0] font-semibold text-sm">{tech}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#232946] hover:bg-[#7f5af0] text-[#7f5af0] hover:text-white font-semibold rounded-full shadow-md transition-colors text-base"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#232946] hover:bg-[#2cb67d] text-[#2cb67d] hover:text-white font-semibold rounded-full shadow-md transition-colors text-base"
                  aria-label={`View ${project.title} Live`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* View All Projects on GitHub Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/abhisheksingh293"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#7f5af0] hover:bg-[#2cb67d] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all text-lg"
          aria-label="View all projects on GitHub"
        >
          <FaGithub /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
