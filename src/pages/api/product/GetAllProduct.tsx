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
} from "@mui/material";
import Link from "@mui/material/Link";
import React, { useEffect, useState } from "react";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

const GetAllProduct = () => {
  const [values, setValues] = useState<Product[]>([]);
  const [deletedProduct, setDeletedProduct] = useState(false);

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
  }, [deletedProduct]);

  const deleteProductById = async (id: number = 0) => {
    try {
      const deletedProduct = await deleteProduct.run(id);
      setDeletedProduct(true);
      console.log(deletedProduct);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: 32,
          color: "#49454E",
          paddingBottom: 2,
          fontWeight: 600,
          fontFamily: "Paytone One",
        }}
      >
        Productos
      </Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: 16,
            paddingBottom: 5,
            fontFamily: "Quicksand",
            fontWeight: 800,
          }}
        >
          <Link underline="hover" color="inherit" href="../orders">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="#7E57C2"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Productos
          </Link>
        </Breadcrumbs>
      </div>

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
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16}}>
                Código
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Producto
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Descripción
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Precio
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Categoria
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Foto
              </TableCell>
              <TableCell align="center" style={{ backgroundColor: "#7E57C2", color:'white', fontFamily:'Quicksand', fontSize:16 }}>
                Control
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((values) => (
              <TableRow key={values.id}>
                <TableCell align="center" style={{fontFamily:'Quicksand', fontSize:14}}># {values.id} </TableCell>
                <TableCell align="center" style={{fontFamily:'Quicksand', fontSize:14}}>{values.nombreProducto} </TableCell>
                <TableCell align="center" style={{fontFamily:'Quicksand', fontSize:14}}>{values.descripcion} </TableCell>
                <TableCell align="center" style={{fontFamily:'Quicksand', fontSize:14}}>$ {values.precio} </TableCell>
                <TableCell align="center" style={{fontFamily:'Quicksand', fontSize:14}}>
                  {values.categoria?.nombre}
                </TableCell>
                <TableCell align="center">
                  <img src={values.foto} width={50} height={50} />
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => deleteProductById(values.id)} style={{ backgroundColor: "#6750A4", color: "white", fontFamily:'Quicksand', fontSize:14 }}>
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
