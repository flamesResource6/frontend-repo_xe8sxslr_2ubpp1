import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-cyan-400 to-teal-400 rounded" />
        </div>
        <div className="md:col-span-7 text-slate-300 leading-relaxed space-y-4">
          <p>
            I’m a developer with a passion for building performant, accessible, and user-focused products. I love translating complex problems into elegant, scalable solutions.
          </p>
          <p>
            My experience spans modern front-end frameworks, robust back-end services, and cloud-native tooling. I thrive in fast-moving environments where craftsmanship and impact matter.
          </p>
          <p>
            When I’m not shipping features, you’ll find me exploring new tech, refining developer workflows, or contributing to open-source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;