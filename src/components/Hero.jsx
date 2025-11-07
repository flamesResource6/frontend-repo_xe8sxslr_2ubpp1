import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-300">Tech Enthusiast &amp; Developer</p>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          I build fast, reliable, and delightful digital products — from interactive frontends to scalable cloud backends.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-md bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors w-full sm:w-auto">
            View Projects
          </a>
          <a href="/resume.pdf" className="px-6 py-3 rounded-md border border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition-colors w-full sm:w-auto" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;