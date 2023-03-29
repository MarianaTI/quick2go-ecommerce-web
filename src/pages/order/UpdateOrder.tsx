import UpdateOrderUseCase from "@/application/usecases/orderUseCase/UpdateOrderUseCase";
import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import React, { useState } from "react";
import { Button, Modal, Box,Typography } from "@mui/material";

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

const UpdateOrder = () => {
  const [values, setValues] = useState<Order>({});

  

  const orderRepo = new OrderRepo();
  const getOneOrder = new GetOneOrderUseCase(orderRepo);
  const updateOrder = new UpdateOrderUseCase(orderRepo);

  const getOrder = async (id: number = 0) => {
    try {
      const foundOrder = await getOneOrder.run(id);
      setValues(foundOrder);
    } catch (e) {
      console.error(e);
    }
  };

  const updateOrders = async (e:any) => {
    e.preventDefault();
    try {
      const updatedOrder = await updateOrder.run(values);
      setValues(updatedOrder);
      console.log(updatedOrder);
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
  const [openAdd, setOpenAdd] = React.useState(false);
  
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
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
        Actualizar
      </Button>
      <Modal open={openAdd}
      onClose={handleCloseAdd}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <label>
          ID de la orden:
          <input type="number" name="id" onChange={handleChange} />
        </label>
        <button onClick={() => getOrder(values.id)}>cargar</button>
        <form onSubmit={updateOrders}>
          <br />
          <label>
            ID del producto:
            <input
              type="number"
              name="productoId"
              value={values.productoId}
              onChange={handleChange}
            />
          </label>{' '}
          <br />
          <label>
            Cantidad del producto:
            <input
              type="number"
              name="cantidadProducto"
              value={values.cantidadProducto}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button onClick={(e) => updateOrders(e)}>Actualizar</button>
        </form>
      </Box>
    </Modal>
    </div>
  );
};
export default UpdateOrder;
