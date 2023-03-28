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
  Box,
  Input,
  InputBase,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const GetAllOrder = () => {
  const [values, setValues] = useState<Order[]>([]);
  const [deletedOrder, setDeletedOrder] = useState(false);
  const [search, setSearch] = useState("");

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
    <Box marginLeft={128} marginBottom={3}>
    <InputBase
        sx={{ ml: 1, flex: 1}}
        style={{color:'inherit'}}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) =>setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px', color: 'inherit' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
    
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
            {values.filter((value)=>{
                if(search === "") {
                    return value
                }
                else if (value.id?.toString().toLowerCase().includes(search.toLowerCase())){
                    return value
                }
            })
            .map((values) => (
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
