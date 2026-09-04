import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  BrainCircuit, 
  Database, 
  Wrench, 
  Sparkles, 
  Terminal 
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Sparkles },
    { id: 'programming', name: 'Programming Languages', icon: Terminal, data: skillsData.programmingLanguages },
    { id: 'frontend', name: 'Frontend Development', icon: Layout, data: skillsData.frontendDevelopment },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainCircuit, data: skillsData.aiAndMachineLearning },
    { id: 'database', name: 'Databases', icon: Database, data: skillsData.databases },
    { id: 'tools', name: 'Tools & Technologies', icon: Wrench, data: skillsData.toolsAndTechnologies },
  ];

  // Helper to render a group of skill cards
  const renderSkillCards = (skillsList) => (
    <div className="skill-card-grid">
      {skillsList.map((skill, idx) => (
        <div key={idx} className="skill-card">
          <div className="skill-meta">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-badge">{skill.badge}</span>
          </div>

          <div className="skill-progress-track">
            <div 
              className="skill-progress-bar" 
              style={{ width: `${skill.level}%` }}
              title={`Proficiency: ${skill.level}%`}
            ></div>
          </div>

          <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            <span>Proficiency Level</span>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{skill.level}%</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-wrapper" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skillset &amp; Tooling</span>
          </h2>
          <p className="section-subtitle">
            Grounded in academic fundamentals and hands-on project engineering across modern web technologies and AI/ML algorithms.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="skills-nav-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content based on Active Category */}
        {activeCategory === 'all' ? (
          <div className="d-flex flex-column gap-5">
            {categories.filter(c => c.id !== 'all').map((catGroup) => {
              const Icon = catGroup.icon;
              return (
                <div key={catGroup.id}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <Icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                      {catGroup.name}
                    </h3>
                  </div>
                  {renderSkillCards(catGroup.data)}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {renderSkillCards(
              categories.find((c) => c.id === activeCategory)?.data || []
            )}
          </div>
        )}
      </div>
    </section>
  );
}
