import React from 'react';
import { Code2, Database, Cloud, Cpu, Boxes, TerminalSquare } from 'lucide-react';

const skills = [
  { name: 'JavaScript', icon: <Code2 className="w-6 h-6" /> },
  { name: 'TypeScript', icon: <Code2 className="w-6 h-6" /> },
  { name: 'React', icon: <Boxes className="w-6 h-6" /> },
  { name: 'Node.js', icon: <TerminalSquare className="w-6 h-6" /> },
  { name: 'Python', icon: <Cpu className="w-6 h-6" /> },
  { name: 'FastAPI', icon: <Cpu className="w-6 h-6" /> },
  { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
  { name: 'AWS', icon: <Cloud className="w-6 h-6" /> },
];

const Skills = () => {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tech</h2>
        <p className="mt-2 text-slate-400">A toolkit focused on reliability, performance, and developer happiness.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
              <div className="text-cyan-400">{s.icon}</div>
              <span className="text-slate-200">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;