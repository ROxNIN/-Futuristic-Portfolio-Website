// Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/contact', formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
      console.error('❌ Contact form error:', err);
    }
  };

  return (
    <ContactContainer>
      <SectionTitle>Get in Touch</SectionTitle>

      <ContactDetails>
        <p>Email: <a href="mailto:vivekjohn2k16@gmail.com">vivekjohn2k16@gmail.com</a></p>
        <p>Phone: +91 9304061983</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/vivek2002kumar" target="_blank" rel="noopener noreferrer">linkedin.com/in/vivek2002kumar</a></p>
      </ContactDetails>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
        {status && <StatusMessage>{status}</StatusMessage>}
      </Form>
    </ContactContainer>
  );
};

export default Contact;


const ContactContainer = styled.div`
  padding: 80px 10%;
  background: black;
  text-align: center;
  color: white;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContactDetails = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 1.2rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-shadow: 0px 0px 10px cyan;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: auto;

  input, textarea {
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 1rem;
    outline: none;
  }

  button {
    background: #d4aaff;
    color: #000;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: #ffffff;
      color: #000;
      text-shadow: 0px 0px 10px rgba(212, 170, 255, 1);
    }
  }
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #a0ffce;
`;
