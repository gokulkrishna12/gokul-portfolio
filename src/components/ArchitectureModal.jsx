import React from 'react';
import { X, CheckCircle2, Sparkles, Github, Server, ExternalLink, Download } from 'lucide-react';

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

        {/* Modal Footer Actions - Perfectly Styled & Aligned */}
        <div className="modal-footer-custom d-flex flex-wrap gap-2 justify-content-between align-items-center pt-3 mt-2 border-top border-secondary">
          <div className="d-flex flex-wrap gap-2">
            
            {/* Frontend Repo */}
            {project.githubFrontend && project.githubFrontend !== '#' && (
              <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="btn-modal-code">
                <Github size={15} className="me-1" /> Frontend
              </a>
            )}

            {/* Backend Repo */}
            {project.githubBackend && project.githubBackend !== '#' && (
              <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn-modal-code">
                <Github size={15} className="me-1" /> Backend
              </a>
            )}

            {/* Tech Docs PDF */}
            {project.pdfDocs && (
              <a href={project.pdfDocs} download className="btn-modal-code text-info" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                <Download size={15} className="me-1" /> Docs (PDF)
              </a>
            )}
          </div>

          {/* Gorgeous Glowing Open Live / APK Button */}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-danger px-4 py-2 rounded-pill fw-bold text-decoration-none d-flex align-items-center gap-2 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #ef233c 0%, #d90429 100%)', 
                border: 'none',
                boxShadow: '0 4px 20px rgba(239, 35, 60, 0.5)',
                transition: 'transform 0.2s ease'
              }}
            >
              <ExternalLink size={16} /> 
              {project.liveUrl.includes('.apk') ? 'Download APK' : 'Open Live Demo'}
            </a>
          )}
        </div>

      </div>
    </div>
  );
}