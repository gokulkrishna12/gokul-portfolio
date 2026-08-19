import React, { useRef, useState } from 'react';
import { Play, Pause, Download, Send, ArrowRight } from 'lucide-react';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Playback error:", err));
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="hero-video-section">
      <div className="container hero-container">
        <div className="row align-items-center gy-5">
          
          {/* Left: Bio & Actions */}
          <div className="col-lg-6 col-12 intro-text-block">
            <div className="badge-status">
              <span className="status-dot"></span>
              <span>Actively Seeking Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight-name">Gokulkrishna</span>
              <span className="highlight-role">Java Full-Stack Developer</span>
            </h1>

            <p className="hero-bio">
              Architecting scalable distributed web apps with <strong>Java 17, Spring Boot, React.js</strong>, and <strong>AWS Cloud Services</strong>, powered by modern Generative AI integrations.
            </p>

            <div className="cta-buttons">
              <a href="#projects" className="btn-primary-glow">
                Explore Projects <ArrowRight size={17} className="ms-2" />
              </a>
              <a href="#contact" className="btn-glass">
                <Send size={16} className="me-2" /> Contact Me
              </a>
              <a href="/resume.pdf" download className="btn-glass">
                <Download size={16} className="me-2" /> Resume
              </a>
            </div>
          </div>

          {/* Right: Perfect Locked Video Display */}
          <div className="col-lg-6 col-12 video-presentation-wrapper">
            <div className="video-frame-container">
              <video
                ref={videoRef}
                src="/videos/gokul-intro.mp4#t=0.001"
                playsInline
                preload="auto"
                onClick={handleTogglePlay}
                onEnded={handleVideoEnded}
              />

              <div className="video-control-overlay">
                <button
                  className={`btn-play-state ${isPlaying ? 'playing' : ''}`}
                  onClick={handleTogglePlay}
                  aria-label="Toggle Video Play"
                >
                  {isPlaying ? (
                    <>
                      <Pause size={16} /> Pause Intro
                    </>
                  ) : (
                    <>
                      <Play size={16} fill="currentColor" /> Play Intro
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}