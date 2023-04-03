import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Error404 = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <Typography variant="h1" style={{ marginBottom: '16px' }}>
        404
      </Typography>
      <Typography variant="h4" align="center" style={{ marginBottom: '16px' }}>
        Oops! The page you requested could not be found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ marginTop: '16px' }}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Error404;
