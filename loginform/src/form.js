import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "./formcontext";
import { TextField, MenuItem, Button, Grid } from "@mui/material";

const genderOptions = ["Male", "Female", "Other"];

const Form = () => {
  const { addEntry, updateEntry, formData, editIndex, setEditIndex } = useContext(FormContext);

  const [formState, setFormState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    dob: "",
    gender: "",
  });

  useEffect(() => {
    if (editIndex !== null) {
      setFormState(formData[editIndex]);
    }
  }, [editIndex, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      updateEntry(editIndex, formState);
    } else {
      addEntry(formState);
    }
    setFormState({
      firstName: "",
      middleName: "",
      lastName: "",
      age: "",
      dob: "",
      gender: "",
    });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setFormState({
      firstName: "",
      middleName: "",
      lastName: "",
      age: "",
      dob: "",
      gender: "",
    });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: "1rem" }}>
      {["firstName", "middleName", "lastName"].map((field) => (
        <Grid item xs={12} sm={4} key={field}>
          <TextField
            fullWidth
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={formState[field]}
            onChange={handleChange}
          />
        </Grid>
      ))}
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="number"
          label="Age"
          name="age"
          value={formState.age}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="date"
          label="Date of Birth"
          name="dob"
          InputLabelProps={{ shrink: true }}
          value={formState.dob}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Gender"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
        >
          {genderOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {editIndex !== null ? "Update" : "Add"}
        </Button>
        {editIndex !== null && (
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: "1rem" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Form;
