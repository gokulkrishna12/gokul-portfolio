import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="row gy-5 align-items-center">
          {/* Left Info Column */}
          <div className="col-lg-5 col-12">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-heading mb-3">Let’s Build Something Remarkable</h2>
            <p className="contact-subtext">
              Have an open full-stack role, project collaboration, or want to discuss scalable Java architecture & AI? Drop a message!
            </p>

            <div className="contact-info-list mt-4">
              <a href="mailto:gokuldinesh32@gmail.com" className="info-item text-decoration-none">
                <div className="icon-box"><Mail size={18} /></div>
                <div>
                  <label>EMAIL DIRECTLY</label>
                  <p className="email-text">gokuldinesh32@gmail.com</p>
                </div>
              </a>

              <div className="info-item">
                <div className="icon-box"><MapPin size={18} /></div>
                <div>
                  <label>LOCATION</label>
                  <p>Chennai, India • Open to Remote & Relocation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dark Contact Form */}
          <div className="col-lg-7 col-12">
            <div className="contact-card-wrap glass-panel">
              {status === 'sent' ? (
                <div className="success-state text-center py-5">
                  <CheckCircle size={48} className="text-danger mb-3" />
                  <h3 className="fw-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-secondary">Thanks for reaching out, Gokul will get back to you shortly.</p>
                  <button className="btn-primary-glow mt-3" onClick={() => setStatus('idle')}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        rows="4"
                        className="form-control custom-input"
                        placeholder="Hi Gokul, we would love to discuss a Full-Stack developer role with you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-primary-glow w-100 justify-content-center" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : (
                          <>
                            <Send size={16} className="me-2" /> Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}