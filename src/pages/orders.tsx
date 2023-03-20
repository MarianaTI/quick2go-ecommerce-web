import { Breadcrumbs, Link, Typography } from "@mui/material";
import CreateOrder from "./api/order/CreateOrder";
import GetAllOrder from "./api/order/GetAllOrder";
import GetOneOrder from "./api/order/GetOneOrder";
import UpdateOrder from "./api/order/UpdateOrder";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Orders() {
  
  return (
    <>
      <Typography
        sx={{
          fontSize: 32,
          color: "#49454E",
          paddingBottom: 2,
          fontWeight: 600,
          fontFamily: "Paytone One",
        }}
      >
        Pedidos
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
            Pedidos
          </Link>
        </Breadcrumbs>
      </div>
      <CreateOrder />
      <GetAllOrder />
      {/* <GetOneOrder />
      <UpdateOrder /> */}
    </>
  );
}
export default Orders;
