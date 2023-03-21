import CreateCategoryUseCase from "@/application/usecases/categoryUseCase/CreateCategoryUseCase";
import Category from "@/domain/entities/category";
import CategoryRepo from "@/infrastructure/implementation/httpRequest/axios/CategoryRepo";
import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 370,
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
        }}
      >
        Agregar
      </Button>
      <Modal open={openAdd} onClose={handleCloseAdd} aria-labelledby='modal-modal-title' aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:20, marginTop:10}}>
            Agregar categoria
        </Typography>
        <TextField label='Nombre' name="nombre" onChange={handleChange} color='secondary' style={{width:300}}/>
        <TextField label='Descripcion' name="descripcion" onChange={handleChange} color='secondary' style={{width:300}}/>
        <TextField label='Estado' name="estado" onChange={handleChange} color='secondary' style={{width:300}}/>
        <TextField label='Foto' name="foto" onChange={handleChange} color='secondary' style={{width:300}}/>
        </Box>
      </Modal>
    </>
  );
};
export default CreateCategory;
