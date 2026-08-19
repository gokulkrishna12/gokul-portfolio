import React from 'react';
import { Server, Layout, Cloud, Database, Sparkles, Terminal } from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Backend & Distributed Systems',
      icon: Server,
      skills: ['Java 17', 'Spring Boot', 'Spring Security (JWT)', 'Spring Data JPA', 'RESTful APIs', 'Microservices Architecture'],
    },
    {
      title: 'Frontend & UI Engineering',
      icon: Layout,
      skills: ['React.js', 'Vite', 'Sass / SCSS', 'Bootstrap 5', 'Responsive Design', 'State Management'],
    },
    {
      title: 'Cloud, DevOps & Hosting',
      icon: Cloud,
      skills: ['AWS EC2', 'AWS RDS', 'AWS CloudFront CDN', 'Docker Containers', 'Netlify CI/CD', 'Git / GitHub'],
    },
    {
      title: 'Databases & AI Workflows',
      icon: Database,
      skills: ['MySQL Architecture', 'Index Optimization', 'Google Gemini AI API', 'Jackson JSON Streaming', 'Schema Normalization'],
    },
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap text-center mb-5">
          <span className="section-tag">CORE COMPETENCIES</span>
          <h2 className="section-heading">Technical Skills Matrix</h2>
          <p className="section-subtext">Comprehensive breakdown of full-stack engineering tools and cloud platforms I work with.</p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4 mt-2">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div key={index} className="col-lg-6 col-12">
                <div className="tech-category-card glass-panel">
                  <div className="category-header">
                    <div className="category-icon-box">
                      <Icon size={20} />
                    </div>
                    <h3 className="category-title">{cat.title}</h3>
                  </div>

                  <div className="skills-badge-wrap">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="skill-badge-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}