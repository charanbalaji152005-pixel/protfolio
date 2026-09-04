import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center gy-4 justify-content-between pb-4">
          {/* Brand & Tagline */}
          <div className="col-md-6 text-center text-md-start">
            <div className="brand-logo justify-content-center justify-content-md-start mb-2">
              <span className="brand-badge">CB</span>
              <span>{personalInfo.name}</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              AI &amp; ML Graduate | React.js Web-Developer |Aspiring Software Engineer
            </p>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Mahendra Institute of Technology
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end gap-3">
            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                title="Send Email"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn ms-md-2"
              title="Scroll to top of page"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright strip */}
        <div 
          className="d-flex flex-column flex-sm-row align-items-center justify-content-between pt-4 mt-3"
          style={{ borderTop: '1px solid var(--border-subtle)', fontSize: '0.84rem', color: 'var(--text-muted)' }}
        >
          <p style={{ margin: 0 }}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p style={{ margin: 0 }}>
            Designed &amp; Developed with React.js &amp; Modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
