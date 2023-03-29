import * as React from 'react';
import {Typography, Container} from '@mui/material';

function Home() {

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hola! Bienvenido de vuelta
        </Typography>
      </Container>
    </>
  );
}
export default Home;