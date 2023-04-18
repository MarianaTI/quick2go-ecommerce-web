import CreateCategoryUseCase from "@/application/usecases/categoryUseCase/CreateCategoryUseCase";
import Category from "@/domain/entities/category";
import CategoryRepo from "@/infrastructure/implementation/httpRequest/axios/CategoryRepo";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
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
  borderRadius: 8,
};

const CreateCategory = () => {
  const [values, setValues] = useState<Category>({});
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const categoryRepo = new CategoryRepo();
  const createCategory = new CreateCategoryUseCase(categoryRepo);

  const postCategory = async (e: any) => {
    e.preventDefault();
    try {
      const createdCategory: Category = await createCategory.run(values);
      console.log(createdCategory);
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
          height: 40
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
            Agregar categoría
          </Typography>
          <Divider style={{ borderTop: "1.5px solid #7E57C2" }} />
          <form onSubmit={postCategory}>
            <TextField
              required
              label="Nombre de la categoría"
              name="nombre"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.nombre}
              style={{ width: 365, marginTop: 10 }}
            />
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
            <TextField
              required
              label="Estado"
              name="estado"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.estado}
              style={{ width: 365, marginTop: 10 }}
            />
            <Typography
              id="modal-modal-title"
              style={{ marginBottom: 10, color: "#696969", marginTop:20 }}
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
                marginTop: 15,
              }}
            >
              Agregar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default CreateCategory;
