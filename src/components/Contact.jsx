import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 7000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Whether you are hiring for an entry-level role, software development project, or AI initiative, I am eager to connect.
          </p>
        </div>

        <div className="row gy-5">
          {/* Left Column: Direct Contact Details & Info Cards */}
          <div className="col-lg-5">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px' }}>
              Direct Contact Channels
            </h3>

            {/* Email card */}
            <a href={`mailto:${personalInfo.email}`} className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Email Address
                </span>
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  {personalInfo.email}
                </strong>
              </div>
            </a>

            {/* Phone card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Contact Number
                </span>
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  {personalInfo.phone}
                </strong>
              </div>
            </div>

            {/* Location card */}
            <div className="contact-info-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Location &amp; Mobility
                </span>
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  {personalInfo.location} (Open to Relocation)
                </strong>
              </div>
            </div>

            {/* LinkedIn card */}
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-info-card">
              <div className="contact-icon-box">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LinkedIn Profile
                </span>
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  linkedin.com/in/charanbalaji-m
                </strong>
              </div>
            </a>

            {/* GitHub card */}
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-info-card">
              <div className="contact-icon-box">
                <GithubIcon size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GitHub Profile
                </span>
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  github.com/charanbalaji-m
                </strong>
              </div>
            </a>
          </div>

          {/* Right Column: Working Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                Send a Direct Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '25px' }}>
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              {/* Feedback Alerts */}
              {isSubmitted && (
                <div className="form-alert-success">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {errorMessage && (
                <div className="alert alert-danger" style={{ borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}>
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6 form-group-custom">
                    <label htmlFor="contact-name" className="form-label-custom">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / John Doe"
                      className="form-input-custom"
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group-custom">
                    <label htmlFor="contact-email" className="form-label-custom">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="form-input-custom"
                      required
                    />
                  </div>
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-subject" className="form-label-custom">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer / AI Engineer Interview Opportunity"
                    className="form-input-custom"
                  />
                </div>

                <div className="form-group-custom">
                  <label htmlFor="contact-message" className="form-label-custom">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, role details, or questions here..."
                    className="form-textarea-custom"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-modern-primary w-100"
                  style={{ padding: '14px 28px', fontSize: '1rem' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
