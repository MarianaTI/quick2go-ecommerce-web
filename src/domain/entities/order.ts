import Product from "./product";

//entidad order
interface Order{
    id?: number,
    productoId?: number,
    cantidadProducto?: number,
    subTotal?: number
    producto?: Product,
}
export default Order;
