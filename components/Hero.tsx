
import React from 'react';
import { RESUME_DATA } from '../constants';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-grid-slate-900">
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-indigo-100 blur-[120px] rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/3 bg-blue-100 blur-[100px] rounded-full opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <Reveal delay={100}>
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
              Software Developer
            </span>
          </Reveal>

          <Reveal delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8">
              Building scalable apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">modern tech.</span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Hi, I'm <span className="text-slate-900 font-semibold">{RESUME_DATA.name}</span>.
              I specialize in full-stack development, API engineering, and building robust distributed systems.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                View My Work
              </a>
              <a
                href="/Akhil_Talla_Resume.pdf"
                download="Akhil_Talla_Resume.pdf"
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <a href="#contact" className="px-8 py-4 bg-white text-slate-900 font-semibold border border-slate-200 rounded-lg hover:border-slate-300 transition-all shadow-sm">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
