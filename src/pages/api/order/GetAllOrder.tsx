import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useEffect, useState } from "react";

const GetAllOrder = () => {
  const [values, setValues] = useState<Order[]>([]);

  const orderRepo = new OrderRepo();
  const getAllOrder = new GetAllOrderUseCase(orderRepo);

  useEffect(() => {
    const getAllOrderMethod = async () => {
      try {
        const allOrder: Order[] = await getAllOrder.run();
        setValues(allOrder);
        console.log(allOrder);
      } catch (e) {
        console.error(e);
      }
    };
    getAllOrderMethod();
  }, []);

  return (
    <div>
      <ul>
        {values.map((values) => (
          <li key={values.id}>
            <p>ID: {values.id}</p>
            <p>Producto ID: {values.productoId}</p>
            <p>Cantidad de producto: {values.cantidadProducto}</p>
            <p>Subtotal: {values.subTotal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GetAllOrder;