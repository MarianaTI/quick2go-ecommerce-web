import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUserCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
    borderRadius:8
  };
  

const CreateOrder = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [values, setValues] = useState<Order>({});

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const orderRepo = new OrderRepo();
  const createOrder = new CreateOrderUseCase(orderRepo);

  const postOrders = async (e: any) => {
    e.preventDefault();
    try {
      const createdOrder: Order = await createOrder.run(values);
      console.log(createdOrder);
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
    <div>
      <Button
        onClick={handleOpenAdd}
        style={{
          backgroundColor: "#6750A4",
          color: "white",
          float: "right",
          marginBottom: 15,
          padding: 10,
          marginRight: 25
        }}
      >
        Agregar
      </Button>


      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:20, marginTop:10}}>
            Agregar pedido
          </Typography>
          <TextField
            label="Código de producto"
            name="productoId"
            onChange={handleChange}
            style={{width:300, marginBottom:20}}
            color="secondary"
          />
          <br />
          <TextField
            label="Cantidad de productos"
            name="cantidadProducto"
            onChange={handleChange}
            style={{width:300}}
            color="secondary"
          />
          <br />
          <br />
          <Button onClick={(e) => postOrders(e)} style={{backgroundColor: "#6750A4",
          color: "white", margin: 10, float: "right"}}>Agregar</Button>
          <Button onClick={handleCloseAdd} style={{backgroundColor: "#6750A4",
          color: "white", float: "right", margin:10}}>Close</Button>
        </Box>
      </Modal>
      {/* <form onSubmit={postOrders}>
        <label htmlFor="productoId">Código de producto</label>
        <br />
        <input
          type="text"
          name="ProductoId"
          id="productoId"
          value={values.productoId}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="cantidadProducto">Cantidad de productos</label>
        <br />
        <input
          type="text"
          name="CantidadProducto"
          id="cantidadProducto"
          value={values.cantidadProducto}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Agregar</button>
      </form> */}
    </div>
  );
};
export default CreateOrder;



      {/* <Formik initialValues={values} onSubmit={postOrders}>
            {({
              values,
              setValues,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="productoId">Código de producto</label><br/>
                    <input type="text" 
                    name="productoId" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productoId} 
                    /><br />
                    
                    <label htmlFor="cantidadProducto">Cantidad de productos</label><br/>
                    <input type="text" 
                    name="cantidadProducto" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cantidadProducto} 
                    /><br />

                    <button type="submit">Agregar</button>
                </form>
            )}
            </Formik> */}