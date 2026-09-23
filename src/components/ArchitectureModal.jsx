import React from 'react';
import { X, CheckCircle2, Sparkles, Code2, Server, ExternalLink, Download } from 'lucide-react';

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
        <div 
          className="modal-footer-custom" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: '20px', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.1)' 
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {project.githubFrontend && project.githubFrontend !== '#' && (
              <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="btn-modal-code" style={{ textDecoration: 'none' }}>
                <Code2 size={15} style={{ marginRight: '6px' }} /> Frontend
              </a>
            )}
            
            {project.githubBackend && project.githubBackend !== '#' && (
              <a href={project.githubBackend} target="_blank" rel="noreferrer" className="btn-modal-code" style={{ textDecoration: 'none' }}>
                <Server size={15} style={{ marginRight: '6px' }} /> Backend
              </a>
            )}

            {/* Tech Docs PDF Button */}
            {project.pdfDocs && (
              <a href={project.pdfDocs} download className="btn-modal-code" style={{ textDecoration: 'none', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                <Download size={15} style={{ marginRight: '6px' }} /> Docs (PDF)
              </a>
            )}
          </div>

          {/* BEAUTIFUL GLOWING RED BUTTON (Forced with Inline Styles) */}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              style={{
                background: 'linear-gradient(135deg, #ff4b4b 0%, #d90429 100%)',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(217, 4, 41, 0.5)',
                fontSize: '14px',
                border: '1px solid #ff4b4b',
                cursor: 'pointer',
                marginLeft: 'auto',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 4, 41, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(217, 4, 41, 0.5)';
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