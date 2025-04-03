import React, { useContext } from "react";
import { FormContext } from "./formcontext";
import { Button, Typography } from "@mui/material";

const FormList = () => {
  const { formData, deleteEntry, setEditIndex } = useContext(FormContext);

  return (
    <div>
      <Typography variant="h6">User List</Typography>
      {formData.length === 0 ? (
        <Typography>No data available.</Typography>
      ) : (
        formData.map((data, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <Typography>
              {data.firstName} {data.middleName} {data.lastName} - {data.gender} - {data.age} years
              - DOB: {data.dob}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setEditIndex(index)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteEntry(index)}
              style={{ marginLeft: "1rem" }}
            >
              Delete
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default FormList;
