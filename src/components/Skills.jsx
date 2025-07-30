import React from 'react';
import { SiReact, SiKotlin, SiJavascript, SiFlutter, SiTailwindcss, SiFigma, SiHtml5, SiCss3, SiBootstrap, SiAdobe, SiDocker, SiJenkins, SiCloudflare, SiGraphql, SiGit, SiGithub, SiMongodb, SiFirebase } from 'react-icons/si';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Kotlin', icon: <SiKotlin /> },
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiReact /> },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
    ]
  },
  {
    category: 'Design & Tools',
    skills: [
      { name: 'Adobe XD', icon: <SiAdobe /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'AWS', icon: <SiCloudflare /> },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] drop-shadow-lg text-center">
        Skills
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsData.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-[#7f5af0]/20 p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] inline-block pb-1 border-b-4 border-[#7f5af0]/20">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#232946]/70 text-[#eaeaea] shadow-lg border-2 border-[#2cb67d]/20 hover:border-[#7f5af0] transition-all cursor-pointer font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-[#7f5af0]"
                  tabIndex={0}
                  aria-label={skill.name}
                >
                  <span className="text-2xl">{skill.icon}</span> {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
