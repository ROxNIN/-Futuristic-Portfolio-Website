import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FormContainer = styled.section`
  padding: 50px;
  background: #121212;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #444;
  background: #1a1a2e;
  color: white;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: cyan;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #444;
  background: #1a1a2e;
  color: white;
  border-radius: 5px;
  outline: none;
  resize: none;
  &:focus {
    border-color: magenta;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px;
  background: cyan;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    background: magenta;
    color: white;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with EmailJS or backend call
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FormContainer>
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <SubmitButton whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} type="submit">
          Send Message
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
