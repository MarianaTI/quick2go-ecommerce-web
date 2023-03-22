import DeleteProductUseCase from "@/application/usecases/productUseCase/DeleteProductUseCase";
import GetAllProductUseCase from "@/application/usecases/productUseCase/GetAllProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Breadcrumbs,
  Typography,
  TextField,
  InputBase,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const GetAllProduct = () => {
  const [values, setValues] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const productRepo = new ProductRepo();
  const getAllProduct = new GetAllProductUseCase(productRepo);
  const deleteProduct = new DeleteProductUseCase(productRepo);

  useEffect(() => {
    const getAllProductMethod = async () => {
      try {
        const allProduct: Product[] = await getAllProduct.run();
        setValues(allProduct);
        console.log(allProduct);
      } catch (e) {
        console.error(e);
      }
    };
    getAllProductMethod();
  }, []);

  const deleteProductById = async (id: number = 0) => {
    try {
      const deletedProduct = await deleteProduct.run(id);
      setValues(values.filter((product) => product.id !== id));
      console.log(deletedProduct);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
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
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "1000px",
          maxWidth: "1248px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          marginBottom: 8,
          marginTop: 2,
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
                Producto
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
                Descripción
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
                Precio
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
                Categoria
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
                Foto
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
            {values
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.nombreProducto
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
                    # {values.id}{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.nombreProducto}{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.descripcion}{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    $ {values.precio}{" "}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontFamily: "Quicksand", fontSize: 14 }}
                  >
                    {values.categoria?.nombre}
                  </TableCell>
                  <TableCell align="center">
                    <img src={values.foto} width={50} height={50} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => deleteProductById(values.id)}
                      style={{
                        backgroundColor: "#6750A4",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: 14,
                      }}
                    >
                      Eliminar
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
export default GetAllProduct;
