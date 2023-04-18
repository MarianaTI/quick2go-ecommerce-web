import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";

const GetOneOrder = () => {
  const [values, setValues] = useState<Order | null>(null);
  const [orderId, setOrderId] = useState<number>(0);

  const orderRepo = new OrderRepo();
  const getOneOrder = new GetOneOrderUseCase(orderRepo);

  const oneOrder = async () => {
    try {
      const gotOneOrder = await getOneOrder.run(orderId);
      setValues(gotOneOrder);
      console.log(gotOneOrder);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input type="number" value={orderId} onChange={(e) => setOrderId(parseInt(e.target.value))}/>
      <button onClick={oneOrder}> Get order </button>
      {values && (
        <div>
          <h2>detalles</h2>
          <p>{values.id}</p>
          <p>{values.cantidadProducto}</p>
          <p>{values.productoId}</p>
          <p>{values.subTotal}</p>
        </div>
      )}
    </div>
  );
};
export default GetOneOrder;