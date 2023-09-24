// src/components/Form.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { validateEmail } from '../utils/validation'; // Import the validation function

interface FormData {
  email: string;
  name: string;
  school: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    school: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation error when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (): void => {
    const newFormErrors: Partial<FormData> = {};

    // Validate email using the imported function
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newFormErrors.email = 'Please enter a valid email address';
    }

    // Validate name (add your own validation logic)
    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
    }

    // Validate school (add your own validation logic)
    if (!formData.school.trim()) {
      newFormErrors.school = 'School is required';
    }

    // Check if there are any errors
    if (Object.keys(newFormErrors).length === 0) {
      onSubmit(formData);
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="School"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            error={!!formErrors.school}
            helperText={formErrors.school}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
