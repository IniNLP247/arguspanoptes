import { useState } from "react";
import type { FormEvent } from "react";
import Section from "../components/Section";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <Section style={{ paddingBottom: 0 }}>
        <div className="section-label">Get in touch</div>
        <h1 className="section-title about-title">Contact</h1>
        <div className="divider"></div>
        <p className="page-intro">
          For collaboration, research enquiries, or press. We read everything
          and response times vary.
        </p>
      </Section>

      <Section style={{ paddingTop: "48px" }}>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">
                <a href="mailto:contact@arguspanoptes.org">
                  contact@arguspanoptes.org
                </a>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">
                <a
                  href="https://github.com/arguspanoptes"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/arguspanoptes
                </a>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-item-label">Location</span>
              <span className="contact-item-value contact-muted">Taiwan</span>
            </div>

            <div className="contact-item">
              <span className="contact-item-label">Status</span>
              <span className="contact-item-value contact-status-row">
                <span className="status-dot"></span>
                <span className="contact-muted">
                  Phase 3 - Perception Active
                </span>
              </span>
            </div>

            <div className="contact-note-box">
              <p>
                This is a research project. We welcome enquiries from
                researchers, SAR professionals, engineers interested in
                contributing, and institutions looking to collaborate. Spam is
                silently archived.
              </p>
            </div>
          </div>

          <div>
            <h2 className="contact-form-title">Send a Message</h2>

            <form
              id="contact-form"
              className="contact-form"
              noValidate
              onSubmit={onSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" defaultValue="">
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="press">Press / Media</option>
                  <option value="contribution">
                    Contributing to the Project
                  </option>
                  <option value="technical">Technical Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-submit${submitted ? " btn-submit--sent" : ""}`}
                disabled={submitted}
              >
                {submitted ? "Message Sent" : "Send Message"}
              </button>

              <p className="form-note">
                {submitted
                  ? "Your message has been recorded. We'll be in touch."
                  : "No backend attached - form submissions are not currently processed server-side."}
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

export default ContactPage;
