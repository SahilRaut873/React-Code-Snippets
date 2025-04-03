import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormPage = ({ addData }) => {
  // Local state for the form input values
  const [form, setForm] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  // Handle change in form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Add data to the parent (App.js) using addData function
    addData(form);
    // Navigate back to homepage after submitting
    navigate('/');
  };

  return (
    <Container>
      <h2>New Form</h2>
      {/* Form fields */}
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </Container>
  );
};

export default FormPage;
