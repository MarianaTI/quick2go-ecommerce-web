import * as React from 'react';
import {Typography, Container, Breadcrumbs, Link} from '@mui/material';
import GetAllSale from './sale/GetAllSale';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Sale() {

  return (
    <>
      <Typography
        sx={{
          fontSize: 42,
          color: "#49454E",
          paddingBottom: 1,
          fontWeight: 600,
          fontFamily: "Quicksand",
        }}
      >
        Ventas
      </Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: 16,
            paddingBottom: 3,
            fontFamily: "Quicksand",
            fontWeight: 800,
          }}
        >
          <Link underline="hover" color="inherit" href="../orders">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="#7E57C2"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Venta
          </Link>
        </Breadcrumbs>
      </div>
      <GetAllSale/>
    </>
  );
}
export default Sale;