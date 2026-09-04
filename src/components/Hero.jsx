import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Mail, 
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column: Introduction & CTA */}
          <div className="col-lg-7">
            {/* Status badge */}
            <div className="hero-greeting-badge">
              <span className="pulse-dot"></span>
              <span>Available for Full-time Roles &amp; Immediate Joiner</span>
            </div>

            {/* Name */}
            <h1 className="hero-name-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Headline */}
            <div className="hero-dynamic-headline">
              <span style={{ color: 'var(--text-muted)' }}>Specializing in</span>
              <span className="gradient-text" style={{ minHeight: '38px', display: 'inline-block' }}>
                {personalInfo.roles[currentRoleIndex]}
              </span>
            </div>

            {/* Short Professional Introduction */}
            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* Required Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-modern-primary">
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={handleDownloadResume} className="btn-modern-secondary">
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              <a href="#contact" className="btn-modern-secondary">
                <Send size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social quick connect */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect directly:
              </span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="footer-social-btn" 
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-quick-stats">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="hero-stat-box">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="col-lg-5">
            <div className="hero-image-wrapper">
              <div className="profile-glow-ring"></div>
              
              <div className="profile-card">
                <img 
                  src={profilePhoto} 
                  alt={`${personalInfo.name} - AI & ML Graduate and Software Developer`} 
                  className="profile-img"
                />

                {/* Floating Info Badge */}
                <div className="profile-floating-badge">
                  <div className="badge-icon">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h5 className="badge-title">AI &amp; ML Graduate</h5>
                    <p className="badge-desc">Mahendra Institute of Eng. &amp; Tech.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
