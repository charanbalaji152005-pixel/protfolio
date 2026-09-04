import { personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  Code2, 
  Target, 
  GraduationCap, 
  Compass, 
  Zap, 
  MapPin
} from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Tomorrow with <span className="gradient-text">AI &amp; Code</span>
          </h2>
          <p className="section-subtitle">
            A focused look into my academic background, technical ethos, and career aspirations.
          </p>
        </div>

        <div className="row gy-4">
          {/* Left Column: Detailed Summary & Vision */}
          <div className="col-lg-7">
            <div className="glass-card h-100">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '18px', fontWeight: 700 }}>
                Professional Profile
              </h3>
              
              <div className="about-card-body">
                {personalInfo.aboutDetailed.map((paragraph, idx) => (
                  <p key={idx} style={{ lineHeight: 1.8, fontSize: '1rem', color: 'var(--text-secondary)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quick Info Grid */}
              <div className="row g-3 mt-4 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="about-icon-box" style={{ width: '40px', height: '40px' }}>
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Education</span>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>B.E [CSE] in AI &amp; ML</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="about-icon-box" style={{ width: '40px', height: '40px' }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{personalInfo.location}</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="about-icon-box" style={{ width: '40px', height: '40px' }}>
                      <Target size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Target Roles</span>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Software Dev / AI Engineer</strong>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="about-icon-box" style={{ width: '40px', height: '40px' }}>
                      <Zap size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Notice Period</span>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Immediate Joiner</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Career Goals */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3 h-100">
              {/* Card 1: AI & ML Foundation */}
              <div className="about-highlight-card">
                <div className="about-icon-box">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                    AI &amp; Machine Learning Core
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Specialized coursework from Mahendra Institute of Engineering and Technology in neural architectures, supervised learning, NLP pipelines, and computer vision models.
                  </p>
                </div>
              </div>

              {/* Card 2: Modern Frontend Architecture */}
              <div className="about-highlight-card">
                <div className="about-icon-box">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                    React.js &amp; Frontend Craft
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Building responsive, accessible, and fast web applications using modern React, state management hooks, Bootstrap 5, and clean component hierarchies.
                  </p>
                </div>
              </div>

              {/* Card 3: Career Goals */}
              <div className="about-highlight-card" style={{ background: 'rgba(99, 102, 241, 0.08)', borderColor: 'rgba(99, 102, 241, 0.35)' }}>
                <div className="about-icon-box" style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}>
                  <Target size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px', color: '#818cf8' }}>
                    Career Ambitions
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>
                    Eager to join an innovative engineering team as a Software Developer or AI Engineer. Committed to writing clean code, learning new stacks quickly, and delivering tangible impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
