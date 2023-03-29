import CreateProductUseCase from "@/application/usecases/productUseCase/CreateProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import { ImagePreviewInput } from "@/components/Inputs/ImagePreviewInput";
import React, { SyntheticEvent, useState } from "react";
import ImageInput from "@/components/Inputs/ImageInput/ImageInput";
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { selectSession } from "@/feacture/sessionslice";
import { stat } from "fs";
import { ProtectedRoutes } from "@/components/Security/ProtectedRoutes";

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

const CreateProduct = () => {
  //state
  const [values, setValues] = useState<Product>({});
  const [openAdd, setOpenAdd] = useState(false);

  //token
  const session = useSelector(selectSession);
  const router = useRouter();


  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const productRepo = new ProductRepo();
  const createProduct = new CreateProductUseCase(productRepo);

  const postProductos = async (e: any) => {
    //renderizar para evitar que se recargue la pagina
    e.preventDefault();
    console.log(e);
    try {
      const { data, status } = await createProduct.run(values, session.token);
      console.log(data);
      console.log(values);


      if (status === 200 && data) {
        setValues(data);
      }
    } catch (err) {
      console.error(err);
    }
  };


  //funciones
  //[] => acceder a las propiedades de un objeto dinamica
  const handleChange = (e: any) => {
    // destructuracion
    const { name, value } = e.target;
    setValues({
      //operador de propagacion => acceder a todos los valores
      ...values,
      [name]: value,
    });
  };
  const handleUpdateFiles = (pictures: any) =>
    setValues({ ...values, foto: pictures });
  return (
    <>
      <div>
        <Button
          onClick={handleOpenAdd}
          style={{
            backgroundColor: "#6750A4",
            color: "white",
            float: "right",
            marginBottom: 15,
            padding: 10,
            marginRight: 25,
            height: 40,
          }}
        >
          Agregar
        </Button>
        <Modal
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ marginBottom: 10, marginTop: 10 }}
            >
              Agregar producto
            </Typography>
            <Divider style={{ borderTop: "1.5px solid #7E57C2" }} />
            <form onSubmit={postProductos}>
              <TextField
                required
                label="Nombre del producto"
                name="nombreProducto"
                id="standard-basic"
                size="small"
                variant="standard"
                color="secondary"
                onChange={handleChange}
                value={values.nombreProducto}
                style={{ width: 365, marginTop: 10 }}
              />
              <br />
              <TextField
                required
                label="Descripción"
                name="descripcion"
                id="standard-basic"
                size="small"
                variant="standard"
                color="secondary"
                onChange={handleChange}
                value={values.descripcion}
                style={{ width: 365, marginTop: 10 }}
              />
              <br />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  required
                  type="number"
                  label="Código categoria"
                  name="categoriaId"
                  id="standard-basic"
                  size="small"
                  variant="standard"
                  color="secondary"
                  onChange={handleChange}
                  value={values.categoriaId}
                  style={{ width: 180, marginTop: 15, marginRight: 15 }}
                />
                <br />
                <TextField
                  required
                  type="number"
                  label="Precio"
                  name="precio"
                  id="outlined-required"
                  variant="standard"
                  color="secondary"
                  onChange={handleChange}
                  value={values.precio}
                  style={{ width: 170, marginTop: 10, marginLeft: 15 }}
                />
              </Box>
              <br />
              <Typography
                id="modal-modal-title"
                style={{ marginBottom: 10, color: "#696969" }}
              >
                Foto *
              </Typography>
              <ImageInput
                updatePictureCb={handleUpdateFiles}
                size="200px"
                radius="15px"
              />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#6750A4",
                  color: "white",
                  height: 30,
                  marginTop: 10,
                }}
              >
                Agregar
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </>

  );
};
export default CreateProduct;
