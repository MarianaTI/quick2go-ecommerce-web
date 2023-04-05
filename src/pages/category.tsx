import { Breadcrumbs, Link, Typography } from "@mui/material";
import CreateCategory from "./categoryCrud/CreateCategory";
import GetAllCategory from "./categoryCrud/GetAllCategory";
import UpdateCategory from "./categoryCrud/UpdateCategory";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Categories() {
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
        Categorías
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
            Categoría
          </Link>
        </Breadcrumbs>
      </div>
        <UpdateCategory/>
        <CreateCategory/>
        <GetAllCategory />
      </>
    );
  }
  
  export default Categories;
  