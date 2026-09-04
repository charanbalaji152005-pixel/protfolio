import React from 'react';
import { journeyData } from '../data/portfolioData';
import { 
  Calendar, 
  Building, 
  Rocket
} from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Rocket size={14} />
            <span>Practical Experience &amp; Milestones</span>
          </div>
          <h2 className="section-title">
            Career &amp; <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-subtitle">
            A transparent timeline of academic research, technical internships, bootcamp training, and engineering milestones.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="timeline-container">
          {journeyData.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-node" style={{ borderColor: 'var(--accent-indigo)', boxShadow: '0 0 12px var(--accent-indigo)' }}></div>
              
              <div className="timeline-content-card">
                <div className="timeline-badge-row">
                  <div className="timeline-year-pill">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#c7d2fe', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                    {item.type}
                  </span>
                </div>

                <h3 className="timeline-title">{item.title}</h3>

                <div className="timeline-subtitle" style={{ color: '#a5b4fc' }}>
                  <Building size={16} />
                  <span>{item.organization}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.highlights && (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
                      Key Focus Areas &amp; Deliverables:
                    </span>
                    <ul className="bullet-points-list">
                      {item.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
