import UpdateOrderUseCase from "@/application/usecases/orderUseCase/UpdateOrderUseCase";
import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";

const UpdateOrder = () => {
  const [valueId, setValueId] = useState('');
  const [values, setValues] = useState<Order>({});

  const orderRepo = new OrderRepo();
  const getOneOrder = new GetOneOrderUseCase(orderRepo);
  const updateOrder = new UpdateOrderUseCase(orderRepo);

  const getOrder = async () => {
    try {
      const foundOrder = await getOneOrder.run(setValueId);
      setValues(foundOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateOrder = async () => {
    try {
      const updatedOrder = await updateOrder.run(values);
      console.log(updatedOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;
    setValues({...values, [name]: value});
  };

  return (
    <>
      
    </>
  );
};
export default UpdateOrder;
