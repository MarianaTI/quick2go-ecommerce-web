import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";
import axios from "axios";

class OrderRepo implements IOrderRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/pedidos/';
    }
    async getall(): Promise<Order[]> {
        const response = await axios.get<Order[]>(this.url);
        return response.data;
    }
    async getOne(id: number): Promise<Order> {
        const response = await axios.get<Order>(this.url+id);
        return response.data;
    }
    async create(order: Order): Promise<Order> {
        const response = await axios.post<Order>(this.url, order);
        return response.data;
    }
    async update(order: Order): Promise<Order> {
        const response = await axios.put<Order>(this.url+order.id, order, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
    async delete(id: number): Promise<Order> {
        const response = await axios.delete<Order>(this.url+id);
        return response.data;
    }
}
export default OrderRepo;
