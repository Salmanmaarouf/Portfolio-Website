import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRippleEffect } from '../hooks/useRippleEffect';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useRippleEffect();

  useEffect(() => {
    // Apply fade-in effect on page load
    document.body.classList.add('show');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setResponseMessage('All fields are required.');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);

      // Clear form fields if email was sent successfully
      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="left-column">
        {/* Left sidebar/spacing */}
      </div>
      <div className="center-column">
        <img src="/images/contact.webp" className="main-image" alt="Contact" />
      </div>
      <div className="right-column">
        <div className="back-button-container">
          <Link to="/" className="back-button">
            <span className="back-arrow">←</span> Back to Home
          </Link>
        </div>
        <div className="page-header content">
          <h1>CONTACT</h1>
          <div className="underline"></div>
        </div>
        <div className="content">
          <p>I'm based out of Melbourne, Australia. Send me an email here:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {responseMessage && (
            <div style={{ 
              color: responseMessage.includes('successfully') ? 'green' : 'red',
              marginTop: '1rem'
            }}>
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
