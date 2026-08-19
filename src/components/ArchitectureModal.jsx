import React from 'react';
import { X, CheckCircle2, Sparkles, Code2, Server, ExternalLink } from 'lucide-react';

export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="architecture-modal-backdrop" onClick={onClose}>
      <div className="architecture-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="btn-close-modal" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-custom">
          <span className="modal-badge">
            <Sparkles size={14} /> {project.category}
          </span>
          <h3>{project.title}</h3>
          <p className="modal-tagline">{project.architecture.tagline}</p>
        </div>

        {/* Modal Body */}
        <div className="modal-body-custom">
          <h4>System Overview</h4>
          <p className="overview-text">{project.architecture.overview}</p>

          <h4>Engineering Highlights</h4>
          <ul className="highlight-list">
            {project.architecture.points.map((pt, i) => (
              <li key={i}>
                <CheckCircle2 size={16} className="text-danger flex-shrink-0 mt-1" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-custom d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="btn-modal-code">
              <Code2 size={15} className="me-1" /> Frontend Repo
            </a>
            <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn-modal-code">
              <Server size={15} className="me-1" /> Backend Repo
            </a>
          </div>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary-glow btn-sm py-2 px-3">
            <ExternalLink size={14} className="me-1" /> Open Live
          </a>
        </div>

      </div>
    </div>
  );
}