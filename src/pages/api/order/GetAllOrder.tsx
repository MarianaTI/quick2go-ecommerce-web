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
  Typography,
  Breadcrumbs,
  Link,
  Modal,
  TextField,
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
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "1000px",
          maxWidth: "1248px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Table style={{ fontFamily: "Quicksand" }}>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                
                Código
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                
                Productos
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                
                Cantidad
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                
                Subtotal
              </TableCell>
              <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                
                Control
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((values) => (
              <TableRow key={values.id}>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  # {values.id}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                {values.producto?.nombreProducto}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  # {values.cantidadProducto} 
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  $ {values.subTotal}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  {/* <Button
                    onClick={() => handleEditClick(values)}
                    style={{
                      backgroundColor: "#6750A4",
                      color: "white",
                      fontFamily: "Quicksand",
                      fontSize: 14,
                    }}
                  >
                    Editar
                  </Button> */}
                  <Button
                    onClick={() => deleteOrderById(values.id)}
                    style={{
                      backgroundColor: "#6750A4",
                      color: "white",
                      fontFamily: "Quicksand",
                      fontSize: 14,
                      marginLeft: 10,
                    }}
                  >
                    Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default GetAllOrder;
