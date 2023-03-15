import UpdateOrderUseCase from "@/application/usecases/orderUseCase/UpdateOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";

const UpdateOrder = () => {
  const [values, setValues] = useState<Order>({});

  const orderRepo = new OrderRepo();
  const updateOrder = new UpdateOrderUseCase(orderRepo);

  const putOrders = async (e: any) => {
    e.preventDefault();
    try {
      const updatedOrder: Order = await updateOrder.run(values);
      console.log(updatedOrder);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleEdit = (values: any) => {
    setValues(values);
  };

  return (
    <div>
      <form onSubmit={putOrders}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={values.id}
          onChange={handleChange}
        />

        <label htmlFor="productoId">Código de producto</label>
        <input
          type="text"
          id="productoId"
          name="productoId"
          value={values.productoId}
          onChange={handleChange}
        />

        <label htmlFor="cantidadProducto">Cantidad de productos</label>
        <input
          type="text"
          id="cantidadProducto"
          name="cantidadProducto"
          value={values.cantidadProducto}
          onChange={handleChange}
        />

        <label htmlFor="subTotal">SubTotal</label>
        <input
          type="text"
          id="subTotal"
          name="subTotal"
          value={values.subTotal}
          onChange={handleChange}
        />

        <button type="submit">Actualizar orden</button>
      </form>
    </div>
  );
};
export default UpdateOrder;
