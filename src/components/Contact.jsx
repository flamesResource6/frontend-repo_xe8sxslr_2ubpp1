import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Get in touch</h2>
          <p className="mt-2 text-slate-400">Open to roles, collaborations, and interesting problems.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <span className="p-2 rounded-md border border-slate-800 bg-slate-900/60 text-slate-200 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors"><Github className="w-5 h-5" /></span>
              <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <span className="p-2 rounded-md border border-slate-800 bg-slate-900/60 text-slate-200 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors"><Linkedin className="w-5 h-5" /></span>
              <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">LinkedIn</span>
            </a>
            <a href="mailto:you@example.com" className="flex items-center gap-3 group">
              <span className="p-2 rounded-md border border-slate-800 bg-slate-900/60 text-slate-200 group-hover:border-cyan-400 group-hover:text-cyan-300 transition-colors"><Mail className="w-5 h-5" /></span>
              <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">you@example.com</span>
            </a>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input type="text" className="mt-1 w-full rounded-md bg-slate-950 border border-slate-800 text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-slate-950 border border-slate-800 text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md bg-slate-950 border border-slate-800 text-slate-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="How can I help?" required />
            </div>
            <button type="submit" className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;