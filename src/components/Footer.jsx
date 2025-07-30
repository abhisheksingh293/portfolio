import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0a1026] via-[#1e2746] to-[#232946] backdrop-blur-md border-t-2 border-t-transparent bg-clip-padding relative z-10">
      <div className="w-full h-1 bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#00cfff] absolute top-0 left-0" />
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <span className="text-sm md:text-base text-[#eaeaea] font-medium tracking-wide text-center md:text-left">
          &copy; <a href="https://thekrabhishek.com" className="text-yellow-400 underline underline-offset-2 hover:text-yellow-500 transition-colors">thekrabhishek.com</a> All Right Reserved.
        </span>
        <span className="text-sm md:text-base text-[#eaeaea] font-medium tracking-wide text-center md:text-right flex items-center gap-1">
          Developed &amp; Managed by <span role="img" aria-label="love" className="animate-pulse">💖</span><span className="font-bold text-[#7f5af0]">ABAR</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
