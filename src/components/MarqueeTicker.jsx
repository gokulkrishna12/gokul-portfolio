import React from 'react';
import { Sparkles, Terminal, Cloud, Cpu, Database, Layers, Server } from 'lucide-react';

export default function MarqueeTicker() {
  // Updated with Dual-Stack (Java + MERN) and Microservices-Ready Modular Monolith
  const skillsRow1 = [
    { label: 'Microservices-Ready Modular Monolith', icon: Layers },
    { label: 'Java 17', icon: Terminal },
    { label: 'Spring Boot', icon: Layers },
    { label: 'Node.js', icon: Server },
    { label: 'Express.js', icon: Server },
    { label: 'React.js', icon: Cpu },
    { label: 'MongoDB', icon: Database },
    { label: 'MySQL', icon: Database },
    { label: 'AWS EC2 & RDS', icon: Cloud },
    { label: 'Gemini AI API', icon: Sparkles },
    { label: 'Docker & CI/CD', icon: Terminal }
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