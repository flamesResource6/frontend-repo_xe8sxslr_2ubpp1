import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-cyan-400 font-semibold tracking-wide">&lt;YourName /&gt;</a>
        <ul className="flex items-center gap-6 text-sm text-slate-200">
          <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;