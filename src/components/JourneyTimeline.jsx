import React from 'react';
import { Briefcase, GraduationCap, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function JourneyTimeline() {
  const milestones = [
    {
      period: '2025 - PRESENT',
      title: 'Full Stack Java Development',
      role: 'Spring Boot, React.js & AWS Cloud',
      description: 'Architecting scalable full-stack applications using Java 17, Spring Boot, React.js, and MySQL. Deploying secure, microservices-ready Modular Monolith Architectures on AWS with JWT authentication and Gemini AI integrations.',
      icon: Sparkles,
      badge: 'Current Focus',
    },
    {
      period: '2024 - 2025',
      title: 'Full Stack MERN Development',
      role: 'MongoDB, Express, React, Node.js',
      description: 'Engineered responsive single-page applications and robust RESTful APIs utilizing the complete MERN stack. Managed real-time inventory systems and deployed applications across Vercel and AWS CloudFront.',
      icon: Terminal,
      badge: 'Core Expertise',
    },
    {
      period: '2020 - 2024',
      title: 'B.Tech in Computer Science',
      role: 'Dr. M.G.R. Educational and Research Institute',
      description: 'Mastered software engineering fundamentals, including Core Java, Data Structures & Algorithms, Object-Oriented Design, and relational database management.',
      icon: GraduationCap,
      badge: 'Graduated: 2024',
    },
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap text-center mb-5">
          <span className="section-tag">CAREER PATH</span>
          <h2 className="section-heading">The Journey</h2>
          <p className="section-subtext">My evolution from Computer Science fundamentals to a Dual-Stack (Java & MERN) Software Engineer.</p>
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