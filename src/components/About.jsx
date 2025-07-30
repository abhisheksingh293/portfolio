import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] py-16 px-4">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-[#7f5af0]/30 shadow-2xl p-8 flex flex-col items-center gap-8">
        <img
          src="/profile.jpg"
          alt="Abhishek Kumar"
          className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-[#2cb67d]"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] mb-2">About Me</h2>
        <p className="text-lg text-[#b8c1ec] text-center">
          Hi! I'm <span className="font-semibold text-[#2cb67d]">Abhishek Kumar</span>, a B.Tech Computer Science student at Dr. APJ Abdul Kalam Technical University (KCC Institute of Technology & Management). Passionate about building impactful digital products, I specialize in web and mobile development using React, Python, Java, Kotlin, Node.js, and more. I love learning new technologies and collaborating on innovative projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://linkedin.com/in/abhishek293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#7f5af0] p-3 text-[#7f5af0] hover:text-white transition-all shadow-lg" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
          <a href="https://github.com/abhisheksingh293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#232946] p-3 text-[#232946] hover:text-white transition-all shadow-lg" aria-label="GitHub"><FaGithub size={22} /></a>
          <a href="mailto:krabhisheke@gmail.com" className="rounded-full bg-white/10 hover:bg-[#2cb67d] p-3 text-[#2cb67d] hover:text-white transition-all shadow-lg" aria-label="Email"><FaEnvelope size={22} /></a>
          <a href="https://twitter.com/z_abhisheksingh" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#00cfff] p-3 text-[#00cfff] hover:text-white transition-all shadow-lg" aria-label="Twitter"><FaTwitter size={22} /></a>
          <a href="https://thekrabhishek.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#b8c1ec] p-3 text-[#b8c1ec] hover:text-white transition-all shadow-lg" aria-label="Website"><FaGlobe size={22} /></a>
        </div>
        <div className="flex flex-col items-center gap-1 mt-4">
          <span className="flex items-center text-[#b8c1ec] text-md"><FaMapMarkerAlt className="mr-2" /> Delhi, India</span>
          <span className="text-[#b8c1ec] text-md">Mobile: <span className="text-[#2cb67d]">+91 9661762620</span></span>
          <span className="text-[#b8c1ec] text-md">Email: <span className="text-[#2cb67d]">krabhisheke@gmail.com</span></span>
        </div>
      </div>
    </section>
  );
}

export default About;