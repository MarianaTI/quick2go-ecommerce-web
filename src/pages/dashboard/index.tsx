
import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import { Breadcrumbs, Link, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import GetAllOrder from "../orderCrud/GetAllOrder";
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
    color: #7A797E;
    font-family: "Poppins";
    margin-bottom:20px;
}
`;

const Dashboard = () => {
  const [values, setValues] = useState<Order[]>([]);
  const orderRepo = new OrderRepo();
  const getAllOrder = new GetAllOrderUseCase(orderRepo);

  useEffect (() => {
    const GetAllOrderMethod = async () => {
      try {
        const {data: allOrder, status} = await getAllOrder.run();
        if (status === 200 && allOrder) {
          setValues(allOrder)
        }
        console.log(allOrder);
      } catch (e) {
        console.error(e);
      }
    };
    GetAllOrderMethod();
  }, []);
  return (
    <div className="view">
      <div >
        <div>
          <h1 className="text">Administra todos tus productos y ventas desde aquí</h1>
          <p className="text2">Bienvenido de nuevo!</p>
          {/* <video src="./fruta.mp4" height={200} autoPlay loop muted></video> */}
      <GetAllOrder values={values} setValues={setValues} />
         
        </div>
      </div>
      
      {/* <CreateOrder /> */}
      {/* <UpdateOrder />  */}
    </div>

  );
};

export default Dashboard;
