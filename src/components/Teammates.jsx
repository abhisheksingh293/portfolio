import React from 'react';
import teammatesData from '../data/teammates.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Teammates() {
  return (
    <section id="teammates" className="w-full flex flex-col items-center bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] pt-16 pb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] mb-10 text-center">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {teammatesData.map((mate, idx) => (
          <div
            key={idx}
            className="relative bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-[#7f5af0]/30 shadow-2xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:border-[#2cb67d] transition-all"
          >
            <div className="absolute top-4 right-4 flex gap-2">
              {mate.social.linkedin && (
                <a href={mate.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#2cb67d] hover:text-[#7f5af0] text-xl">
                  <FaLinkedin />
                </a>
              )}
            </div>
            <img src={mate.avatar} alt={mate.name} className="w-64 h-64 object-cover rounded-full mb-4 shadow-lg border-4 border-[#7f5af0]/40" />
            <h3 className="text-3xl font-bold mb-2 text-white text-center drop-shadow whitespace-nowrap">{mate.name}</h3>
            <span className="mb-3 text-lg font-semibold text-[#2cb67d]">{mate.role}</span>
            {mate.description && (
              <p className="text-sm text-[#b8c1ec] mb-3 text-center">{mate.description}</p>
            )}
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {mate.projects.map((project, i) => (
                project.link ? (
                  <a
                    key={i}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#232946] text-[#2cb67d] px-3 py-1 rounded-full border border-[#7f5af0]/40 text-sm md:text-base shadow-sm hover:text-[#7f5af0] transition-colors"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span key={i} className="bg-[#232946] text-[#b8c1ec] px-3 py-1 rounded-full border border-[#7f5af0]/40 text-sm md:text-base shadow-sm">
                    {typeof project === 'string' ? project : project.name}
                  </span>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teammates;
