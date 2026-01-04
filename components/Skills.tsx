
import React from 'react';
import Section from './Section';
import { RESUME_DATA } from '../constants';
import SkillIcon from './SkillIcon';

const Skills: React.FC = () => {
  // Category Icons Mapping
  const getCategoryIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('programming')) return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
    if (n.includes('tools')) return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    );
    if (n.includes('specializations')) return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
    return null;
  };

  return (
    <Section id="skills" title="Technical Skills" className="bg-slate-100/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESUME_DATA.skills.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
              <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg mr-3">
                {getCategoryIcon(category.name)}
              </span>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group relative">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-100 group-hover:border-indigo-200 group-hover:text-indigo-600 group-hover:bg-indigo-50/50 transition-all cursor-default">
                    <span className="mr-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <SkillIcon name={skill} className="w-4 h-4" />
                    </span>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
