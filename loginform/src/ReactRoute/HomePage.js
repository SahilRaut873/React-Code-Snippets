import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Homepage = ({ formData }) => {
  return (
    <div>
      {/* Button to navigate to the form page */}
      <Button component={Link} to="/form" variant="contained" color="primary">Add New Form</Button>
      
      {/* Displaying the table with form data */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Mapping over the formData and displaying each entry in the table */}
            {formData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  {/* Edit button that links to the Edit page */}
                  <Button component={Link} to={`/edit/${data.id}`} variant="contained" color="secondary">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
