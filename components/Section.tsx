
import React from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
            {subtitle && <p className="text-slate-500 max-w-2xl">{subtitle}</p>}
            <div className="h-1 w-20 bg-indigo-600 mt-4 rounded-full"></div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          {children}
        </Reveal>
      </div>
    </section>
  );
};

export default Section;
