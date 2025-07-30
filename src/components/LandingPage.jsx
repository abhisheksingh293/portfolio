import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';

function LandingPage() {
  const handleResume = () => {
    window.open('/resume.pdf', '_blank');
  };
  const handleContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946]">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D5603AQHQP9K-bTtMdw/profile-displayphoto-shrink_400_400/B56Zc__M_KGoAk-/0/1749125223799?e=1756339200&v=beta&t=vCDsYKAL-9leYiVK29aNE1txQvC4D1K5S9e-XKldZgg"
          alt="Abhishek Kumar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-56 h-56 rounded-full object-cover border-4 border-[#7f5af0] shadow-xl mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] drop-shadow-lg mb-2"
        >
          Abhishek Kumar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl md:text-3xl font-semibold text-[#b8c1ec] mb-4"
        >
          B.Tech Student | Computer Science
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-[#eaeaea] mb-8 max-w-2xl"
        >
          Passionate about building modern web & mobile apps. Skilled in React, Python, Java, C++, Kotlin, Node.js, AWS, Figma, and more. Always learning, always building.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="https://linkedin.com/in/abhishek293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#7f5af0] p-3 text-[#7f5af0] hover:text-white transition-all shadow-lg" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="https://github.com/abhisheksingh293" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#232946] p-3 text-[#232946] hover:text-white transition-all shadow-lg" aria-label="GitHub"><FaGithub size={24} /></a>
          <a href="mailto:krabhisheke@gmail.com" className="rounded-full bg-white/10 hover:bg-[#2cb67d] p-3 text-[#2cb67d] hover:text-white transition-all shadow-lg" aria-label="Email"><FaEnvelope size={24} /></a>
          <a href="https://twitter.com/z_abhisheksingh" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#00cfff] p-3 text-[#00cfff] hover:text-white transition-all shadow-lg" aria-label="Twitter"><FaTwitter size={24} /></a>
          <a href="https://thekrabhishek.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 hover:bg-[#b8c1ec] p-3 text-[#b8c1ec] hover:text-white transition-all shadow-lg" aria-label="Website"><FaMapMarkerAlt size={24} /></a>
        </div>
        <div className="flex gap-6 justify-center">
          <button
            onClick={handleResume}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] text-white shadow-lg hover:from-[#7f5af0] hover:to-[#2cb67d] transition-all border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-[#7f5af0] text-lg"
          >
            <FaDownload className="text-xl" /> Download Resume
          </button>
          <button
            onClick={handleContact}
            className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 border-[#2cb67d] text-[#2cb67d] bg-white/10 shadow-lg hover:bg-[#2cb67d] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#2cb67d] text-lg"
          >
            <FaEnvelope className="text-xl" /> Contact Me
          </button>
        </div>
        <div className="mt-8 text-[#b8c1ec] text-md">Delhi, India &nbsp; | &nbsp; +91 9661762620 &nbsp; | &nbsp; krabhisheke@gmail.com</div>
      </div>
    </div>
  );
}

export default LandingPage;
