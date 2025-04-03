import React from 'react';
import { useDispatch } from 'react-redux';
import { addTab } from './TabSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';

const AddTabButton = () => {
  const dispatch = useDispatch();

  const handleAddTab = () => {
    const newTab = { id: uuidv4(), label: 'New Tab' }; // Define tab structure
    dispatch(addTab(newTab)); // Dispatch the action
  };

  return (
    <Button variant="contained" onClick={handleAddTab} style={{ position: 'absolute', top: '10px', right: '10px' }}>
      +
    </Button>
  );
};

export default AddTabButton;
