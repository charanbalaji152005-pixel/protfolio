import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  ShieldCheck 
} from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Continuous Learning</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating foundational proficiency in AI/ML, React, Python, and Databases.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="row g-4">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="col-md-6 col-lg-3">
              <div className="cert-card">
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="cert-icon-wrapper">
                      <ShieldCheck size={26} />
                    </div>
                    <span className="skill-badge" style={{ fontSize: '0.72rem' }}>
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>

                  <div className="d-flex align-items-center gap-2 mb-3" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>Issued: {cert.date}</span>
                  </div>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-pill" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modern-outline w-100"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
