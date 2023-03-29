import UpdateCategoryUseCase from "@/application/usecases/categoryUseCase/UpdateCategoryUseCase";
import GetOneCategoryUseCase from "@/application/usecases/categoryUseCase/GetOneCategoryUseCase";
import Category from "@/domain/entities/category";
import CategoryRepo from "@/infrastructure/implementation/httpRequest/axios/CategoryRepo";
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

const UpdateCategory = () => {
  const [values, setValues] = useState<Category>({});
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const categoryRepo = new CategoryRepo();
  const getOneCategory = new GetOneCategoryUseCase(categoryRepo);
  const updateCategory = new UpdateCategoryUseCase(categoryRepo);

  const getCategory = async (id: number = 0) => {
    try {
      const foundCategory = await getOneCategory.run(id);
      setValues(foundCategory);
    } catch (e) {
      console.error(e);
    }
  };

  const updateCategories = async (e: any) => {
    e.preventDefault();
    try {
      const updatedCategory = await updateCategory.run(values);
      setValues(updatedCategory);
      console.log(updatedCategory);
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
            Editar categoría
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
              label="Código de categoría"
              name="id"
              id="outlined-required"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              style={{ width: 240, marginTop: 10 }}
            />
            <Button
              onClick={() => getCategory(values.id)}
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
          <form onSubmit={updateCategories}>
          <Typography
              id="modal-modal-title"
              style={{  color: "#696969", marginTop: 15 }}
            >
              Nombre de la categoría *
            </Typography>
            <TextField
              name="nombre"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.nombre}
              style={{ width: 365, marginTop: 2 }}
            />
            <Typography
              id="modal-modal-title"
              style={{  color: "#696969", marginTop: 15  }}
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
            <Typography
              id="modal-modal-title"
              style={{  color: "#696969", marginTop: 15  }}
            >
              Estado *
            </Typography>
            <TextField
              name="estado"
              id="standard-basic"
              size="small"
              variant="standard"
              color="secondary"
              onChange={handleChange}
              value={values.estado}
              style={{ width: 365, marginTop: 2 }}
            />
            <br />
            <Typography
              id="modal-modal-title"
              style={{ marginBottom: 10, color: "#696969", marginTop: 15  }}
            >
              Foto *
            </Typography>
            <ImageInput
              updatePictureCb={handleUpdateFiles}
              size="200px"
              radius="15px"
            />
            <Button
              onClick={(e) => updateCategories(e)}
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
export default UpdateCategory;
