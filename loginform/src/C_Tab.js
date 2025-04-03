import React, { useState } from "react";
import {
  Button,
  Paper,
  IconButton,
  Typography,
  Modal,
  Box,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TabComponent = () => {
  const [tabs, setTabs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);

  const openTab = () => {
    // Create a new tab with default form data
    const newTab = {
      id: Date.now(),
      formData: {
        firstName: "",
        lastName: "",
        middleName: "",
        age: "",
        gender: "",
        contact: "",
      },
      name: `Form ${tabs.length + 1}`, // Tab name
    };
    setTabs((prevTabs) => [...prevTabs, newTab]);
    openForm(newTab);
  };

  const closeTab = (id) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
  };

  const openForm = (form) => {
    setCurrentForm(form);
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
    setCurrentForm(null);
  };

  const handleInputChange = (id, field, value) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === id
          ? {
              ...tab,
              formData: { ...tab.formData, [field]: value },
            }
          : tab
      )
    );
    if (currentForm?.id === id) {
      setCurrentForm((prev) => ({
        ...prev,
        formData: { ...prev.formData, [field]: value },
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", currentForm?.formData);
    alert("Form submitted successfully!");
    closeForm();
  };

  return (
    <div style={{ position: "relative", padding: "20px", height: "100vh" }}>
      {/* Button to add a new tab */}
      <Button
        variant="contained"
        color="primary"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
        onClick={openTab}
      >
        Add Tab
      </Button>

      {/* Tab names container */}
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "10px",
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          whiteSpace: "nowrap",
          maxWidth: "calc(100% - 20px)",
        }}
      >
        {tabs.map((tab) => (
          <Paper
            key={tab.id}
            elevation={3}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => openForm(tab)} // Clicking tab name opens form
          >
            <Typography variant="body1">{tab.name}</Typography>

            {/* Close Tab Icon */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent form opening on close
                closeTab(tab.id);
              }}
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Paper>
        ))}
      </div>

      {/* Modal for Fullscreen Form */}
      <Modal
        open={isModalOpen}
        onClose={closeForm}
        aria-labelledby="fullscreen-form-title"
        aria-describedby="fullscreen-form-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            overflowY: "auto",
          }}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            {currentForm?.name}
          </Typography>

          {currentForm && (
            <form noValidate autoComplete="off">
              <Typography variant="body1" gutterBottom>
                Fill in the details for {currentForm.name}
              </Typography>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <TextField
                  label="First Name"
                  fullWidth
                  margin="dense"
                  value={currentForm.formData.firstName}
                  onChange={(e) =>
                    handleInputChange(currentForm.id, "firstName", e.target.value)
                  }
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  margin="dense"
                  value={currentForm.formData.lastName}
                  onChange={(e) =>
                    handleInputChange(currentForm.id, "lastName", e.target.value)
                  }
                />
                <TextField
                  label="Middle Name"
                  fullWidth
                  margin="dense"
                  value={currentForm.formData.middleName}
                  onChange={(e) =>
                    handleInputChange(currentForm.id, "middleName", e.target.value)
                  }
                />
                <TextField
                  label="Age"
                  fullWidth
                  margin="dense"
                  type="number"
                  value={currentForm.formData.age}
                  onChange={(e) =>
                    handleInputChange(currentForm.id, "age", e.target.value)
                  }
                />
                <TextField
                  label="Contact"
                  fullWidth
                  margin="dense"
                  value={currentForm.formData.contact}
                  onChange={(e) =>
                    handleInputChange(currentForm.id, "contact", e.target.value)
                  }
                />
              </div>
            </form>
          )}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button variant="outlined" color="error" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default TabComponent;
