import React, { useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Code2, Server, ExternalLink, Download } from 'lucide-react';

export default function ArchitectureModal({ project, onClose }) {
  // Mobile Fix: Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="architecture-modal-backdrop" 
      onClick={onClose}
      style={{ 
        position: 'fixed', 
        inset: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '15px', 
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.75)' // Dark overlay
      }}
    >
      <div 
        className="architecture-modal-content glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column', // Stacks items vertically
          maxHeight: '90vh', // Maximum height is 90% of screen
          width: '100%',
          maxWidth: '800px',
          position: 'relative',
          overflow: 'hidden' // Hides outer overflow
        }}
      >
        
        {/* Close Button - Stays fixed at the top right */}
        <button 
          className="btn-close-modal" 
          onClick={onClose} 
          aria-label="Close modal"
          style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}
        >
          <X size={20} />
        </button>

        {/* Modal Header - Fixed at Top */}
        <div className="modal-header-custom" style={{ flexShrink: 0, paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="modal-badge">
            <Sparkles size={14} /> {project.category}
          </span>
          <h3 style={{ marginTop: '10px' }}>{project.title}</h3>
          <p className="modal-tagline" style={{ marginBottom: 0 }}>{project.architecture.tagline}</p>
        </div>

        {/* Modal Body - THIS ALONE WILL SCROLL */}
        <div 
          className="modal-body-custom" 
          style={{ 
            flexGrow: 1, // Takes up remaining space
            overflowY: 'auto', // Enables vertical scroll only for text
            padding: '20px 0',
            paddingRight: '10px' // Breathing room for scrollbar
          }}
        >
          <h4>System Overview</h4>
          <p className="overview-text">{project.architecture.overview}</p>

          <h4 className="mt-4">Engineering Highlights</h4>
          <ul className="highlight-list">
            {project.architecture.points.map((pt, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                <CheckCircle2 size={16} className="text-danger flex-shrink-0 mt-1" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions - FIXED AT BOTTOM (Sticky) */}
        <div 
          className="modal-footer-custom" 
          style={{ 
            flexShrink: 0, // Prevents footer from shrinking
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
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

          {/* BEAUTIFUL GLOWING RED BUTTON */}
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