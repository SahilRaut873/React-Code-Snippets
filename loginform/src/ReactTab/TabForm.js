import React from 'react';
import { TextField, Grid } from '@mui/material';

const TabForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField label="First Name" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Middle Name" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Last Name" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Age" type="number" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Gender" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Address" fullWidth variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Date of Birth" type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Contact" type="tel" fullWidth variant="outlined" />
      </Grid>
    </Grid>
  );
};

export default TabForm;
