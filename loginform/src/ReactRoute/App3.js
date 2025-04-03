import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './HomePage';
import FormPage from './FormPage';
import EditPage from './EditPage';

function App3() {
  const [formData, setFormData] = useState([]);

  const addData = (data) => {
    setFormData([...formData, data]);
  };

  const updateData = (updatedData) => {
    setFormData(formData.map((item) => (item.id === updatedData.id ? updatedData : item)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage formData={formData} addData={addData} />} />
        <Route path="/form" element={<FormPage addData={addData} />} />
        <Route path="/edit/:id" element={<EditPage formData={formData} updateData={updateData} />} />
      </Routes>
    </Router>
  );
}

export default App3;
