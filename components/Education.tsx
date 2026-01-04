
import React from 'react';
import Section from './Section';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-12">
        {RESUME_DATA.education.map((edu, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1 mb-2 md:mb-0">
                <span className="text-indigo-600 font-bold text-sm tracking-wide">{edu.period}</span>
              </div>
              <div className="md:col-span-3 pb-8 border-l-2 border-slate-100 pl-8 md:border-l-0 md:pl-0 relative">
                {/* Timeline node for mobile */}
                <div className="absolute top-0 left-[-9px] md:hidden w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {edu.location}
                  </span>
                  {edu.score && (
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-tight">
                      {edu.score}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
