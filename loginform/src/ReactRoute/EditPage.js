import React, { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = ({ formData, updateData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const data = formData.find(item => item.id === id);
    if (data) {
      setForm(data);
    }
  }, [id, formData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    updateData(form);
    navigate('/');
  };

  if (!form) return <div>Loading...</div>;

  return (
    <Container>
      <h2>Edit Form</h2>
      <TextField label="ID" name="id" value={form.id} onChange={handleChange} fullWidth margin="normal" disabled />
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
      <Button onClick={handleSubmit} variant="contained" color="primary">Update</Button>
    </Container>
  );
};

export default EditPage;
