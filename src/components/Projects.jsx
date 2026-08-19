import React, { useState } from 'react';
import { ExternalLink, Layers, Code2, Server } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ArchitectureModal from './ArchitectureModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap text-center mb-5">
          <span className="section-tag">PORTFOLIO SHOWCASE</span>
          <h2 className="section-heading">Featured Engineering</h2>
          <p className="section-subtext">Scalable full-stack systems built with Java, React, Cloud, and Generative AI.</p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className={`project-card glass-panel ${project.featured ? 'is-featured' : ''}`}>
              
              <div>
                <div className="card-top">
                  <span className="project-category">{project.category}</span>
                  <span className="project-status-badge">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-chip-container">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-footer-block">
                
                <div className="repo-links-row">
                  <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="repo-pill" title="Frontend GitHub Repo">
                    <Code2 size={14} className="text-danger" />
                    <span>Frontend</span>
                  </a>
                  <a href={project.githubBackend} target="_blank" rel="noreferrer" className="repo-pill" title="Backend GitHub Repo">
                    <Server size={14} className="text-danger" />
                    <span>Backend</span>
                  </a>
                </div>

                <div className="card-bottom-actions">
                  <button
                    className="btn-architecture"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Layers size={14} /> Architecture
                  </button>

                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-live-demo">
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Reusable Modal Component */}
      <ArchitectureModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}