import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";
import axios from "axios";
import Response from "@/domain/entities/response";

class OrderRepo implements IOrderRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/pedidos/';
    }
    async getall(): Promise<Response<Order[]>> {
        const response = await axios.get<Order[]>(this.url);
        return response;
    }
    async getOne(id: number): Promise<Response<Order>> {
        const response = await axios.get<Order>(this.url+id);
        return response;
    }
    async create(order: Order): Promise<Response<Order>> {
        const response = await axios.post<Order>(this.url, order);
        return response;
    }
    async update(order: Order): Promise<Response<Order>> {
        const response = await axios.put<Order>(this.url+order.id, order, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async delete(id: number): Promise<Response<Order>> {
        const response = await axios.delete<Order>(this.url+id);
        return response;
    }
}
export default OrderRepo;
