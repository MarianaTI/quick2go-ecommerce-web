import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import { Breadcrumbs, Link, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import CreateOrder from "../CRUDS/orderCrud/CreateOrder";
import GetAllOrder from "../CRUDS/orderCrud/GetAllOrder";
import GetOneOrder from "../CRUDS/orderCrud/GetOneOrder";
import UpdateOrder from "../CRUDS/orderCrud/UpdateOrder";
import Layout from "../layout";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export const Welcome = styled(Typography)`
  && {
    font-weight: 700;
    font-size: 40px;
    color: #373739;
    font-family: "Poppins";
  }
`;
export const Text = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 14px;
    color: #7a797e;
    font-family: "Poppins";
    margin-bottom: 20px;
  }
`;
function Orders() {
  const [values, setValues] = useState<Order[]>([]);
  const orderRepo = new OrderRepo();
  const getAllOrder = new GetAllOrderUseCase(orderRepo);

  useEffect(() => {
    const GetAllOrderMethod = async () => {
      try {
        const { data: allOrder, status } = await getAllOrder.run();
        if (status === 200 && allOrder) {
          setValues(allOrder);
        }
        console.log(allOrder);
      } catch (e) {
        console.error(e);
      }
    };
    GetAllOrderMethod();
  }, []);

  return (
    <Layout>
      <div>
        <Welcome>Pedidos</Welcome>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              color: "#7A797E",
              fontSize: 14,
              paddingBottom: 2,
              fontFamily: "Poppins",
              fontWeight: 500,
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
        <Text>Aquí puedes llevar el control de tus pedidos!</Text>
        {/* <CreateOrder /> */}
        <GetAllOrder values={values} setValues={setValues} />
        {/* <UpdateOrder />  */}
      </div>
    </Layout>
  );
}
export default Orders;
