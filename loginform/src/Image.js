import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Paper,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
  {
    subject: 'Test 30 Dec',
    templateName: 'Finding Completed Email',
    objectType: 'Finding',
    createdDate: 'Mon, Dec 30 2024',
    createdBy: 'Sachin Raut',
  },
  {
    subject: 'Test 31',
    templateName: 'Finding Disapproved Email',
    objectType: 'Finding',
    createdDate: 'Tue, Dec 31 2024',
    createdBy: 'Aadesh Borawake',
  },
  // Add more rows as needed
];

const CustomEmailTemplate = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Template Email Name</TableCell>
            <TableCell>Object Type</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.templateName}</TableCell>
              <TableCell>{row.objectType}</TableCell>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomEmailTemplate;