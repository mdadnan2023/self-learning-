// Contact.js

import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const FormButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., send an email, store in a database)
    alert("Form submitted:", formData);
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="message">Message</FormLabel>
        <FormTextarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
