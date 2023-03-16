import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import DeleteOrderUseCase from "@/application/usecases/orderUseCase/DeleteOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const GetAllOrder = () => {
  const [values, setValues] = useState<Order[]>([]);
  const [deletedOrder, setDeletedOrder] = useState(false); 

  const orderRepo = new OrderRepo();
  const getAllOrder = new GetAllOrderUseCase(orderRepo);
  const deleteOrder = new DeleteOrderUseCase(orderRepo);

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
  }, [deletedOrder]);

  const deleteOrderById = async (id: number = 0) => {
    try {
        const deletedOrder = await deleteOrder.run(id);
        setDeletedOrder(true);
        console.log(deletedOrder); 
    } catch (e) {
        console.error(e);   
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Código </TableCell>
              <TableCell align="center"> Producto Id </TableCell>
              <TableCell align="center"> Cantidad de productos</TableCell>
              <TableCell align="center"> Subtotal </TableCell>
              <TableCell align="center"> Control </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((values) => (
              <TableRow key={values.id}>
                <TableCell align="center"># {values.id} </TableCell>
                <TableCell align="center"># {values.productoId} </TableCell>
                <TableCell align="center">{values.cantidadProducto}</TableCell>
                <TableCell align="center">$ {values.subTotal}</TableCell>
                <TableCell align="center"><Button onClick={() => deleteOrderById(values.id)}>Eliminar</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default GetAllOrder;
