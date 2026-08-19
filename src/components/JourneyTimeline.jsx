import React from 'react';
import { Briefcase, GraduationCap, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function JourneyTimeline() {
  const milestones = [
    {
      period: '2026 - PRESENT',
      title: 'Full-Stack & Cloud Engineering',
      role: 'AWS + GenAI Architect',
      description: 'Building end-to-end cloud platforms with Spring Boot REST microservices, AWS RDS MySQL, EC2 deployments, and Gemini AI integration (GK ShopEase).',
      icon: Sparkles,
      badge: 'Current Focus',
    },
    {
      period: '2025 - 2026',
      title: 'Enterprise Java & Full-Stack Systems',
      role: 'Backend Specialist',
      description: 'Designed production-grade backend microservices with Java 17, Spring Data JPA, JWT Authentication, and connected reactive React.js single-page applications.',
      icon: Terminal,
      badge: 'Core Expertise',
    },
    {
      period: '2024 - 2025',
      title: 'Core Foundations & Web Architecture',
      role: 'Software Engineering Journey',
      description: 'Mastered core Data Structures & Algorithms, Object-Oriented Design, relational schema normalization in MySQL, and modern JavaScript / React component lifecycles.',
      icon: GraduationCap,
      badge: 'Foundation',
    },
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap text-center mb-5">
          <span className="section-tag">CAREER PATH</span>
          <h2 className="section-heading">The Journey</h2>
          <p className="section-subtext">My path into scalable Java architecture, modern React frontends, and cloud engineering.</p>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="timeline-card glass-panel">
                <div className="timeline-header">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-badge">{item.badge}</span>
                </div>

                <div className="timeline-body">
                  <div className="icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-role">{item.role}</p>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}