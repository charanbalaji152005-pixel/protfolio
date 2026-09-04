import React, { useState } from 'react';
import { projectsData } from '../projects/projectsData';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Activity, 
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Web Application', 'E-Commerce', 'Product Showcase'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(filter) || p.category === filter);

  return (
    <section id="projects" className="section-wrapper" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects &amp; Live Demos</span>
          </h2>
          <p className="section-subtitle">
            Interactive, responsive web applications and e-commerce platforms designed and built from scratch.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`skill-tab-btn ${filter === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="glass-card project-card">
                <div>
                  {/* Top Meta */}
                  <div className="project-top-meta">
                    <span className="project-category-tag">{project.category}</span>
                    {project.featured && (
                      <span className="d-flex align-items-center gap-1" style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 600 }}>
                        <Sparkles size={14} />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-desc">{project.description}</p>

                  {/* Highlight Metrics */}
                  {project.metrics && (
                    <div className="project-metrics-box">
                      <Activity size={16} />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div className="mb-4">
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
                      Key Capabilities:
                    </span>
                    <ul className="bullet-points-list" style={{ marginBottom: 0 }}>
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '0.85rem' }}>{feat}</li>
                      ))}
                    </ul>
                    {project.features.length > 3 && (
                      <button 
                        onClick={() => setActiveModalProject(project)}
                        className="btn-link"
                        style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontSize: '0.82rem', padding: '4px 0', cursor: 'pointer' }}
                      >
                        + View all {project.features.length} features
                      </button>
                    )}
                  </div>

                  {/* Technologies Used */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons: View Project, GitHub & Details */}
                <div className="project-card-footer flex-wrap gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-modern-primary"
                      title="View Live Project Directly"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modern-outline"
                    title="View Source Code on GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-modern-outline ms-auto"
                    title="Read Project Specs"
                  >
                    <span>Details</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="resume-modal-overlay" onClick={() => setActiveModalProject(null)}>
            <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="resume-modal-close"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="project-category-tag">{activeModalProject.category}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Specification</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>
                {activeModalProject.title}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', marginBottom: '18px' }}>
                {activeModalProject.tagline}
              </p>

              <div className="mb-4">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                  Detailed Overview
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {activeModalProject.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  All Architectural Features &amp; Implementation Details:
                </h4>
                <ul className="bullet-points-list">
                  {activeModalProject.features.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.92rem' }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  Technologies &amp; Libraries:
                </h4>
                <div className="d-flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span key={idx} className="tech-pill" style={{ padding: '6px 14px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-3 pt-3 flex-wrap align-items-center" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modern-primary"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modern-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                  </a>
                )}
                <button 
                  onClick={() => setActiveModalProject(null)}
                  className="btn-modern-secondary ms-auto"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
