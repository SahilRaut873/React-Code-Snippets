import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addEntry = (entry) => {
    setFormData((prev) => [...prev, entry]);
  };

  const updateEntry = (index, updatedEntry) => {
    setFormData((prev) =>
      prev.map((entry, i) => (i === index ? updatedEntry : entry))
    );
    setEditIndex(null);
  };

  const deleteEntry = (index) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormContext.Provider
      value={{ formData, addEntry, updateEntry, deleteEntry, editIndex, setEditIndex }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
