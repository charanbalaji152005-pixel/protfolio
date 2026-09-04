import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education focused on Artificial Intelligence, Machine Learning, and Computer Science fundamentals.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-node"></div>
              
              <div className="timeline-content-card">
                <div className="timeline-badge-row">
                  <div className="timeline-year-pill">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <span className="skill-badge" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
                    {edu.grade}
                  </span>
                </div>

                <h3 className="timeline-title">{edu.degree}</h3>
                
                <div className="timeline-subtitle">
                  <Building2 size={16} />
                  <span>{edu.institution}</span>
                </div>

                <div className="d-flex align-items-center gap-2 mb-3" style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <MapPin size={15} />
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>Specialization: <strong style={{ color: 'var(--text-light)' }}>{edu.specialization}</strong></span>
                </div>

                <p className="timeline-desc">{edu.description}</p>

                {/* Core Courses */}
                {edu.coreCourses && (
                  <div className="mb-4">
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '10px' }}>
                      Key Academic Coursework:
                    </span>
                    <div className="d-flex flex-wrap gap-2">
                      {edu.coreCourses.map((course, cIdx) => (
                        <span key={cIdx} className="tech-pill" style={{ fontSize: '0.78rem' }}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Highlights */}
                {edu.highlights && (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
                      Key Accomplishments:
                    </span>
                    <ul className="bullet-points-list">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
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
