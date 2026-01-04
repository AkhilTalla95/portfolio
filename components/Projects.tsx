
import React from 'react';
import Section from './Section';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my recent software development work.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, idx) => (
          <div key={idx} className="group bg-white border border-slate-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{project.date}</span>
              <div className="flex gap-2">
                {/* Simulated Icons for UI */}
                <div className="w-8 h-8 rounded bg-slate-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-600 mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-slate-600">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
