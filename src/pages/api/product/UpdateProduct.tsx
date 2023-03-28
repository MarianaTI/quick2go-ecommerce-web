import UpdateProductUseCase from "@/application/usecases/productUseCase/UpdateProductUseCase";
import GetOneProductUseCase from "@/application/usecases/productUseCase/GetOneProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Divider,
  TextField,
} from "@mui/material";
import { ImageInput } from "@/components/Inputs/ImageInput";

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

const UpdateProduct = () => {
  const [values, setValues] = useState<Product>({});
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const productRepo = new ProductRepo();
  const getOneProduct = new GetOneProductUseCase(productRepo);
  const updateProduct = new UpdateProductUseCase(productRepo);

  const getProduct = async (id: number = 0) => {
    try {
      const foundProduct = await getOneProduct.run(id);
      setValues(foundProduct);
    } catch (e) {
      console.error(e);
    }
  };

  const updateProducts = async (e: any) => {
    e.preventDefault();
    try {
      const updatedProduct = await updateProduct.run(values);
      setValues(updatedProduct);
      console.log(updatedProduct);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleUpdateFiles = (pictures: any) =>
    setValues({ ...values, foto: pictures });

  return (
    <>
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
        Actualizar
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
            Editar producto
          </Typography>
          <Divider style={{ borderTop: "1.5px solid #7E57C2" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              type="number"
              label="Código del producto a editar"
              name="id"
              id="outlined-required"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              style={{ width: 240, marginTop: 10 }}
            />
            <Button
              onClick={() => getProduct(values.id)}
              style={{
                backgroundColor: "#6750A4",
                color: "white",
                float: "right",
                marginTop: 20,
                marginLeft: 25,
                width: 220,
              }}
            >
              Cargar datos
            </Button>
          </Box>
          <form onSubmit={updateProducts}>
            <Typography
              id="modal-modal-title"
              style={{ color: "#696969", marginTop: 15 }}
            >
              Nombre del producto *
            </Typography>
            <TextField
              name="nombreProducto"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.nombreProducto}
              style={{ width: 365, marginTop: 2 }}
            />
            <Typography
              id="modal-modal-title"
              style={{ color: "#696969", marginTop: 15 }}
            >
              Descripción *
            </Typography>
            <TextField
              name="descripcion"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.descripcion}
              style={{ width: 365, marginTop: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                id="modal-modal-title"
                style={{ color: "#696969", marginTop: 15, marginRight: -7, float:'left'}}
              >
                Código categoría *
              </Typography>
              <Typography
                id="modal-modal-title"
                style={{ color: "#696969", marginTop: 15, marginLeft: 180  }}
              >
                Precio *
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                type="number"
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
                type="number"
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
              onClick={(e) => updateProducts(e)}
              style={{
                backgroundColor: "#6750A4",
                color: "white",
                height: 30,
                marginTop: 15,
              }}
            >
              Actualizar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default UpdateProduct;
