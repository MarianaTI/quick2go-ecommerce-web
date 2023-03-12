import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUserCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import { Formik } from "formik";
import React, {useState} from "react";

const CreateOrder = () => {
    const [values, setValues] = useState<Order>({});

    const orderRepo = new OrderRepo();
    const createOrder = new CreateOrderUseCase(orderRepo);

    const postOrders = async (e:any) => {
        e.preventDefault();
        try {
            const createdOrder: Order = await createOrder.run(values);
            console.log(createdOrder);
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div>
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
            <form onSubmit={postOrders}>
                <label htmlFor="productoId">Código de producto</label><br/>
                <input type="text" 
                name="ProductoId" 
                id="productoId" 
                value={values.productoId} 
                onChange={handleChange}/><br />
                
                <label htmlFor="cantidadProducto">Cantidad de productos</label><br/>
                <input type="text" 
                name="CantidadProducto" 
                id="cantidadProducto" 
                value={values.cantidadProducto} 
                onChange={handleChange}/><br />

                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}
export default CreateOrder;