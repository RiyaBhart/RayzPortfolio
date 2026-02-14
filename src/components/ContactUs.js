import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Phone or Email
    service: 'Social Media Management' // Default
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [message, setMessage] = useState('');

  // Deployed Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDXaSNvbu3PGHYAzD7NMPXAg8KmnZXCk7Bx9lPsuZr_aPgh8aTWBurWRcAyW5wROAynA/exec";

  const services = [
    "Social Media Management",
    "Influencer Marketing",
    "Website Development",
    "PR Management",
    "Visual Production"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    // Create form data for Google Sheets
    const formBody = new FormData();
    formBody.append('name', formData.name);
    formBody.append('contact', formData.contact);
    formBody.append('service', formData.service);
    formBody.append('timestamp', new Date().toLocaleString());

    try {
      // We use 'no-cors' mode because Google Scripts don't return standard CORS headers for simple POSTs
      // This means we won't get a readable JSON response, but the submission WILL work if status is 200.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });

      // Assuming success if no network error thrown
      setStatus('success');
      setMessage('Inquiry sent successfully! We will contact you soon.');
      setFormData({ name: '', contact: '', service: services[0] });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      setMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <section className="contact-lusion" id="contact">
      <div className="contact-lusion-container">
        <h2 className="lusion-section-title">Initiate Contact</h2>

        <form className="lusion-form" onSubmit={handleSubmit}>
          <div className="lusion-input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </div>

          <div className="lusion-input-group">
            <input
              type="text"
              name="contact"
              placeholder="Contact Number / Email"
              value={formData.contact}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
            />
          </div>

          <div className="lusion-input-group">
            <div className="custom-select-wrapper">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="lusion-select"
                disabled={status === 'submitting'}
              >
                {services.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className={`lusion-submit ${status}`}
            disabled={status === 'submitting' || status === 'success'}
          >
            {status === 'submitting' ? (
              <>Sending <Loader2 className="spin" size={16} /></>
            ) : status === 'success' ? (
              <>Sent <CheckCircle size={16} /></>
            ) : status === 'error' ? (
              <>Retry <AlertCircle size={16} /></>
            ) : (
              <>Send Inquiry <Send size={16} /></>
            )}
          </button>

          {message && (
            <p className={`form-status-msg ${status}`}>
              {message}
            </p>
          )}

          <p className="form-note">
            Your details will be sent directly to our team.
          </p>

          <div className="contact-lusion-info">
            <a href="mailto:rayzcreativee@gmail.com">rayzcreativee@gmail.com</a>
            <a href="https://wa.me/923213990311?text=Hello%20Rayz%20Creative" target="_blank" rel="noopener noreferrer">03213990311 (WhatsApp)</a>
            <a href="https://instagram.com/rayzcreative" target="_blank" rel="noopener noreferrer">@rayzcreative</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;