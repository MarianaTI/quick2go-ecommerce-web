import Product from "./product";

//entidad order
interface Order{
    id?: number,
    producto?: Product,
    cantidadProducto?: number,
    subTotal?: number
}
export default Order;
