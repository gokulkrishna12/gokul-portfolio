import React from 'react';
import { Sparkles, Terminal, Cloud, Cpu, Database, Layers } from 'lucide-react';

export default function MarqueeTicker() {
  const skillsRow1 = [
    { label: 'Java 17', icon: Terminal },
    { label: 'Spring Boot', icon: Layers },
    { label: 'AWS EC2 & RDS', icon: Cloud },
    { label: 'React.js', icon: Cpu },
    { label: 'Gemini AI API', icon: Sparkles },
    { label: 'MySQL Architecture', icon: Database },
    { label: 'Docker & CI/CD', icon: Terminal },
    { label: 'RESTful Microservices', icon: Layers },
  ];

  // Duplicated list for seamless infinite loop
  const displayItems = [...skillsRow1, ...skillsRow1];

  return (
    <div className="marquee-section">
      <div className="marquee-track scroll-left">
        {displayItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="marquee-item">
              <Icon size={18} className="text-danger" />
              <span>{item.label}</span>
              <span className="dot-separator">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}