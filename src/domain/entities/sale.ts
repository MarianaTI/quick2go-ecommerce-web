import Order from "./order";

interface Sale{
    id?: number,
    pedidoId?: number,
    direccion?: string,
    totalPago?: number,
    pedido?: Order,
}
export default Sale;