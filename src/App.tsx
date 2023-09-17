// src/App.tsx
import React, { useState } from 'react';
import { Container } from '@mui/material';
import Form from './components/Form';
import DisplayData from './components/DisplayData';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData: any) => {
    // Log the data to the console
    console.log(formData);
    setSubmittedData(formData);
  };

  return (
    <Container maxWidth="sm">
      <h1>Simple Form</h1>
      <Form onSubmit={handleSubmit} />
      {submittedData && <DisplayData data={submittedData} />}
    </Container>
  );
}

export default App;
