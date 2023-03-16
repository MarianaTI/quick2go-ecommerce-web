import DeleteOrderUseCase from "@/application/usecases/orderUseCase/DeleteOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";

const DeleteOrder = () => {
    const [values, setValues] = useState<Order>({});

    const orderRepo = new OrderRepo();
    const deleteOrder = new DeleteOrderUseCase(orderRepo);

    const deleteOrderById = async (id: number) => {
        try {
            const deletedOrder = await deleteOrder.run(id);
            console.log(deletedOrder);  
        } catch (e) {
            console.error(e);   
        }
    }
}
export default DeleteOrder;