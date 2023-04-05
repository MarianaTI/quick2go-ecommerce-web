import Order from "../entities/order";
import Response from '../entities/response';

interface IOrderRepo{
    getall(): Promise<Response<Order[]>>;

    getOne(id:number): Promise<Response<Order>>;

    create(order:Order): Promise<Response<Order>>;

    update(order:Order): Promise<Response<Order>>;
    
    delete(id:number): Promise<Response<Order>>;
}
export default IOrderRepo;