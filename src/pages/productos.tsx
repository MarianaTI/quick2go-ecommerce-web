import { Breadcrumbs, Link, Typography } from "@mui/material";
import CreateProduct from "./api/product/CreateProduct";
import GetAllProduct from "./api/product/GetAllProduct";
import GetOneProduct from "./api/product/GetOneProduct";
import UpdateProduct from "./api/product/UpdateProduct";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Productos() {
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
        Productos
      </Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: 16,
            paddingBottom: 5,
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
            Productos
          </Link>
        </Breadcrumbs>
      </div>
      <UpdateProduct/>
      <CreateProduct /> 
      <GetAllProduct />
      {/* <GetOneProduct /> */}
    </>
  );
}

export default Productos;
