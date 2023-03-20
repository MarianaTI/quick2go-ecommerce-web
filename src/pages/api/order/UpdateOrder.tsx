import UpdateOrderUseCase from "@/application/usecases/orderUseCase/UpdateOrderUseCase";
import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";
import { Button } from "@mui/material";

const UpdateOrder = () => {
  const [values, setValues] = useState<Order>({});

  const orderRepo = new OrderRepo();
  const getOneOrder = new GetOneOrderUseCase(orderRepo);
  const updateOrder = new UpdateOrderUseCase(orderRepo);

  const getOrder = async (id: number = 0) => {
    try {
      const foundOrder = await getOneOrder.run(id);
      setValues(foundOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateOrder = async () => {
    try {
      const updatedOrder = await updateOrder.run(values);
      setValues(updatedOrder);
      console.log(updatedOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateOrder();
  };

  return (
    <>
     <label>
          ID de la orden:
          <input type="number" name="id" onChange={handleChange} />
        </label>
        <button onClick={() => getOrder(values.id)}>cargar</button>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          ID del producto:
          <input
            type="text"
            name="productoId"
            value={values.producto?.id}
            onChange={handleChange}
          />
        </label> <br />
        <label>
          Cantidad del producto:
          <input
            type="number"
            name="cantidadProducto"
            value={values.cantidadProducto}
            onChange={handleChange}
          />
        </label><br />
        {/* <label>
          Subtotal:
          <input
            type="number"
            name="subTotal"
            value={values.subTotal}
            onChange={handleChange}
          />
        </label> */}
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </>
  );
};
export default UpdateOrder;
