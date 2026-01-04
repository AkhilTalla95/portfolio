
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main>
        <Hero />
        
        <Section id="about" title="Professional Summary" subtitle="My philosophy and background in technology.">
          <div className="max-w-4xl">
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "{RESUME_DATA.summary}"
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Technical Depth</h4>
                <p className="text-slate-600 text-sm">Experienced in React and Node.js with a strong focus on cybersecurity and robust software engineering practices.</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Product Focused</h4>
                <p className="text-slate-600 text-sm">Passionate about building user-centric applications that solve real-world problems through innovative engineering.</p>
              </div>
            </div>
          </div>
        </Section>
        
        <Projects />
        <Skills />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
