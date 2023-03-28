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
  Modal,
  Typography,
  Divider,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GetAllSaleUseCase from "@/application/usecases/saleUseCase/GetAllSaleUseCase";
import DeleteSaleUseCase from "@/application/usecases/saleUseCase/DeleteSaleUseCase";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArticleIcon from '@mui/icons-material/Article';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 10,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 2,
  fontFamily: "Quicksand",
};

const GetAllSale = () => {
  const [values, setValues] = useState<Sale[]>([]);
  const [sale, setSale] = useState<Sale | null>(null);
  const [search, setSearch] = useState("");
  const [deletedSell, setDeletedSell] = useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

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
          sx={{ ml: 1, flex: 1 }}
          style={{ color: "inherit" }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "inherit" }}
          aria-label="search"
        >
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
                Google Maps
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
                Orden
              </TableCell>
              {/* <TableCell
                align="center"
                style={{
                  backgroundColor: "#7E57C2",
                  color: "white",
                  fontFamily: "Quicksand",
                  fontSize: 16,
                }}
              >
                Control
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {values
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.id
                    ?.toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((values) => (
                <TableRow key={values.id}>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.id}
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
                    <Button
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/place/${values.direccion}`,
                          "_blank"
                        )
                      }
                      style={{
                        backgroundColor: "#6750A4",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: 14,
                        marginLeft: 10,
                      }}
                    >
                      <FmdGoodIcon />
                    </Button>
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    <Button
                      onClick={() => {
                        setSale(values);
                        handleOpenAdd();
                      }}
                      style={{
                        backgroundColor: "#6750A4",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: 14,
                        marginLeft: 10,
                      }}
                    >
                      <ArticleIcon />
                    </Button>
                  </TableCell>
                  {/* <TableCell
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
                  </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: 20, marginTop: 10 }}
          >
            Detalles de compra
          </Typography>
          <Divider style={{ borderTop: "1.5px solid #7E57C2" }} />
          <List>
            <ListItemText
              primary="Número de folio "
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  No. {sale?.pedidoId}
                </Typography>
              }
            />
            <Typography
              style={{
                fontSize: 18,
                fontFamily: "Quicksand",
                textAlign: "center",
              }}
            >
              Orden a llevar
            </Typography>

            <ListItemText
              primary={sale?.pedido?.producto?.nombreProducto}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {sale?.pedido?.producto?.descripcion} <br />$
                  {sale?.pedido?.producto?.precio}
                  <br />
                  {sale?.pedido?.cantidadProducto} productos
                </Typography>
              }
            />
            <ListItemText primary={"Total: " + sale?.totalPago} />
            <Typography
              style={{
                fontSize: 18,
                fontFamily: "Quicksand",
                textAlign: "center",
              }}
            >
              Información del cliente
            </Typography>
            <ListItemText primary="Dirección" secondary={sale?.direccion}/>
            <Button
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/place/${sale?.direccion}`,
                          "_blank"
                        )
                      }
                      style={{
                        backgroundColor: "#6750A4",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: 10,
                      }}
                    >
                      <FmdGoodIcon />
                    </Button>
          </List>

          <Button
            onClick={handleCloseAdd}
            style={{
              backgroundColor: "#6750A4",
              color: "white",
              float: "right",
              margin: 10,
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default GetAllSale;
