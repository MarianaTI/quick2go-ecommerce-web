import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import Sale from "@/domain/entities/sale";
import SaleRepo from "@/infrastructure/implementation/httpRequest/axios/SaleRepo";
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
import SearchIcon from "@mui/icons-material/Search";
import GetAllSaleUseCase from "@/application/usecases/saleUseCase/GetAllSaleUseCase";
import DeleteSaleUseCase from "@/application/usecases/saleUseCase/DeleteSaleUseCase";

const GetAllSale = () => {
  const [values, setValues] = useState<Sale[]>([]);
  const [search, setSearch] = useState("");
  const [deletedSell, setDeletedSell] = useState(false);

  const saleRepo = new SaleRepo();
  const getAllSale = new GetAllSaleUseCase(saleRepo);
  const deleteSale = new DeleteSaleUseCase(saleRepo);

  useEffect(() => {
    const getAllSaleMethod = async () => {
      try {
        const allSale: Sale[] = await getAllSale.run();
        setValues(allSale);
        console.log(allSale);
      } catch (e) {
        console.error(e);
      }
    };
    getAllSaleMethod();
  }, []);

  const deleteSaleById = async (id: number = 0) => {
    try {
      const deletedSale = await deleteSale.run(id);
      setDeletedSell(true);
      console.log(deletedSale);
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
                Código de pedido
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
                Dirección
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
                Total de pago
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
                Pedido
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
                  # {values.pedidoId}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  {values.direccion}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  $ {values.totalPago}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  {values.pedido?.producto?.nombreProducto}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontFamily: "Quicksand", fontSize: 14 }}
                >
                  <Button
                    onClick={() => deleteSaleById(values.id)}
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
export default GetAllSale;
