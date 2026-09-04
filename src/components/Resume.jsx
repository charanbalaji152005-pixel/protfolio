import React, { useState } from 'react';
import { personalInfo, resumeDetails, educationData, projectsData } from '../data/portfolioData';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Printer, 
  Sparkles,
  ExternalLink,
  Globe
} from 'lucide-react';

export default function Resume() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Generate a printable formatted resume window
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${personalInfo.name} - Resume</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #111827; padding: 40px; max-width: 850px; margin: 0 auto; }
            h1 { font-size: 26px; margin-bottom: 4px; color: #0f172a; text-transform: uppercase; }
            .subtitle { font-size: 14px; font-weight: 600; color: #4338ca; margin-bottom: 12px; }
            .contacts { font-size: 12px; color: #475569; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; }
            h2 { font-size: 16px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; color: #1e293b; text-transform: uppercase; }
            p { font-size: 13px; color: #334155; margin: 0 0 8px 0; }
            .item { margin-bottom: 14px; }
            .item-header { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 13px; color: #0f172a; }
            .item-sub { font-size: 12px; color: #64748b; font-style: italic; margin-bottom: 4px; }
            ul { margin: 4px 0 10px 18px; padding: 0; font-size: 12px; color: #334155; }
            li { margin-bottom: 3px; }
            .skills-list { font-size: 12px; line-height: 1.6; }
            .project-link { color: #4338ca; text-decoration: underline; font-size: 12px; font-weight: 600; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>
          <h1>${personalInfo.name}</h1>
          <div class="subtitle">${personalInfo.headline}</div>
          <div class="contacts">
            ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location} | ${personalInfo.github} | ${personalInfo.linkedin}
          </div>

          <h2>Professional Summary</h2>
          <p>${resumeDetails.summary}</p>

          <h2>Education</h2>
          ${educationData.map(e => `
            <div class="item">
              <div class="item-header">
                <span>${e.degree} - ${e.specialization}</span>
                <span>${e.duration}</span>
              </div>
              <div class="item-sub">${e.institution}, ${e.location} | ${e.grade}</div>
              <p>${e.description}</p>
            </div>
          `).join('')}

          <h2>Core Technical Proficiencies</h2>
          <div class="skills-list">
            <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Responsive Design<br/>
            <strong>AI & Data:</strong> Python, Machine Learning Algorithms, Scikit-Learn, Pandas, NumPy<br/>
            <strong>Databases & Tools:</strong> MySQL, PostgreSQL, Git, GitHub, VS Code
          </div>

          <h2>Featured Projects & Live Demos</h2>
          ${projectsData.map(p => `
            <div class="item">
              <div class="item-header">
                <span>${p.title} (${p.category})</span>
                <a href="${p.liveDemoUrl}" target="_blank" class="project-link">View Live Project ↗</a>
              </div>
              <div class="item-sub">Technologies: ${p.technologies.join(', ')}</div>
              <p>${p.description}</p>
            </div>
          `).join('')}

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="resume" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive overview of academic achievements, technical competencies, and live project demonstrations.
          </p>
        </div>

        {/* Resume Banner */}
        <div className="resume-banner">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Candidate Summary
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                {personalInfo.name}
              </h3>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
                {resumeDetails.summary}
              </p>

              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="skill-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                  {resumeDetails.educationSummary}
                </span>
              </div>

              {/* Core Competencies Checklist */}
              <div className="resume-competencies-grid">
                {resumeDetails.coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="resume-comp-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column gap-3 align-items-lg-end">
                <button 
                  onClick={handleDownload}
                  className="btn-modern-primary w-100" 
                  style={{ maxWidth: '280px', padding: '15px 28px' }}
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </button>

                <button 
                  onClick={() => setShowModal(true)}
                  className="btn-modern-secondary w-100" 
                  style={{ maxWidth: '280px', padding: '14px 28px' }}
                >
                  <Eye size={18} />
                  <span>View Resume</span>
                </button>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', maxWidth: '280px', textAlign: 'center', margin: '4px 0 0 0' }}>
                  ATS-friendly formatted resume with direct project links.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects with Direct View Buttons */}
        <div className="resume-projects-container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Globe size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Portfolio Work
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Featured Projects &amp; Live Demos
              </h3>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Click <strong>View Project</strong> to launch and experience each live demo directly
            </span>
          </div>

          <div className="row g-4">
            {projectsData.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="resume-project-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="skill-badge" style={{ fontSize: '0.74rem', background: 'rgba(99, 102, 241, 0.12)', color: '#818cf8', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
                        {project.category}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {project.title}
                    </h4>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {project.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="project-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern-primary w-100 justify-content-center mt-3"
                    style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                  >
                    <span>View Project</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Resume Interactive Modal */}
        {showModal && (
          <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="resume-modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="d-flex justify-content-between align-items-center mb-4 pb-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
                    {personalInfo.name}
                  </h3>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>
                    {personalInfo.headline}
                  </span>
                </div>
                <button 
                  onClick={handleDownload}
                  className="btn-modern-outline d-none d-sm-inline-flex"
                  title="Print or Save PDF"
                >
                  <Printer size={15} />
                  <span>Print / Save PDF</span>
                </button>
              </div>

              {/* Contact strip */}
              <div className="d-flex flex-wrap gap-3 mb-4 p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <span>📧 {personalInfo.email}</span>
                <span>📱 {personalInfo.phone}</span>
                <span>📍 {personalInfo.location}</span>
                <span>🎓 {educationData[0].institution}</span>
              </div>

              {/* Education section */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '10px' }}>
                  EDUCATION
                </h4>
                {educationData.map(edu => (
                  <div key={edu.id} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <strong style={{ color: 'var(--text-primary)' }}>{edu.degree} - {edu.specialization}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.duration}</span>
                    </div>
                    <div style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem' }}>{edu.institution}, {edu.location}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '4px 0' }}>{edu.description}</p>
                  </div>
                ))}
              </div>

              {/* Technical Proficiencies */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '10px' }}>
                  CORE TECHNICAL PROFICIENCIES
                </h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div><strong style={{ color: 'var(--text-primary)' }}>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Responsive Web Design</div>
                  <div><strong style={{ color: 'var(--text-primary)' }}>AI &amp; Data:</strong> Python, Machine Learning Fundamentals, Scikit-Learn, Pandas, NumPy</div>
                  <div><strong style={{ color: 'var(--text-primary)' }}>Databases &amp; Tools:</strong> MySQL, PostgreSQL, Git, GitHub, VS Code</div>
                </div>
              </div>

              {/* Featured Projects with direct view button */}
              <div className="mb-4">
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '12px' }}>
                  FEATURED PROJECTS &amp; LIVE DEMOS
                </h4>
                <div className="d-flex flex-column gap-3">
                  {projectsData.map(p => (
                    <div key={p.id} className="p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-1">
                        <div>
                          <strong style={{ color: 'var(--text-primary)', fontSize: '1.02rem' }}>{p.title}</strong>
                          <span className="ms-2" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem' }}>({p.technologies.join(', ')})</span>
                        </div>
                        <a
                          href={p.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-modern-primary"
                          style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                        >
                          <span>View Project</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer */}
              <div className="d-flex justify-content-end gap-3 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <button onClick={handleDownload} className="btn-modern-primary">
                  <Download size={16} />
                  <span>Download / Print</span>
                </button>
                <button onClick={() => setShowModal(false)} className="btn-modern-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
