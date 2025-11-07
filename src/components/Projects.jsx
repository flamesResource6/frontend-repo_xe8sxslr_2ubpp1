import React, { useMemo, useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const projectsData = [
  {
    title: 'Realtime Chat App',
    description: 'WebSocket-powered chat with rooms, typing indicators, and message persistence.',
    tags: ['Fullstack', 'React', 'Node', 'WebSocket'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'AI Image Generator',
    description: 'Generate images from text prompts using diffusion models and a slick UI.',
    tags: ['AI/ML', 'Python', 'FastAPI', 'React'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Serverless Analytics',
    description: 'Event collection and dashboards running on serverless infrastructure.',
    tags: ['Cloud', 'AWS', 'Edge'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'This site. Built with React, Tailwind, and a 3D hero scene.',
    tags: ['Frontend', 'React', 'UI'],
    github: 'https://github.com/',
    demo: '#',
  },
];

const tagOptions = ['All', 'Frontend', 'Fullstack', 'AI/ML', 'Cloud', 'React', 'Python', 'FastAPI', 'AWS'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projectsData;
    return projectsData.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
            <p className="mt-2 text-slate-400">A selection of work showcasing craft, performance, and polish.</p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <div className="flex flex-wrap gap-2">
              {tagOptions.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActive(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    active === tag
                      ? 'bg-cyan-500 text-slate-900 border-cyan-400'
                      : 'border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-cyan-400/60 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-2 text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank" rel="noreferrer"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-500 text-slate-900 font-medium hover:bg-cyan-400 transition-colors"
                    target="_blank" rel="noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;