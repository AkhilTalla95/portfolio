
import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-4 h-4" }) => {
  const n = name.toLowerCase();
  
  // Mapping of common skills to Lucide-style SVG paths
  if (n.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/><path d="M12 12c-4.4 0-8-3.6-8-8 0 4.4 3.6 8 8 8 4.4 0 8 3.6 8 8 0-4.4-3.6-8-8-8z"/><path d="M12 12c4.4 0 8-3.6 8-8 0 4.4-3.6 8-8 8-4.4 0-8 3.6-8 8 0-4.4 3.6-8 8-8z"/>
      </svg>
    );
  }
  if (n.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    );
  }
  if (n.includes('javascript') || n.includes('js')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z"/><path d="M16 8v5a3 3 0 0 1-6 0v-1"/>
      </svg>
    );
  }
  if (n.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h7"/><path d="M12 14v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-7"/>
      </svg>
    );
  }
  if (n.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12"/><path d="M18 15V9a9 9 0 0 0-9-9"/>
      </svg>
    );
  }
  if (n.includes('cybersecurity') || n.includes('security')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    );
  }
  if (n.includes('data structures') || n.includes('algorithm')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    );
  }
  if (n.includes('api') || n.includes('engineering')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    );
  }
  if (n.includes('database') || n.includes('sql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    );
  }
  if (n.includes('code') || n.includes('vs code')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    );
  }
  if (n.includes('html') || n.includes('css') || n.includes('bootstrap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h20l-2 17-8 3-8-3L2 3z"/><path d="M8 11h8"/><path d="M8 7h8"/><path d="M8 15h5"/>
      </svg>
    );
  }

  // Generic Default Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  );
};

export default SkillIcon;
