import Order from "../entities/order";

interface IOrderRepo{
    getall(): Promise<Order[]>;

    getOne(id:number): Promise<Order>;

    create(order:Order): Promise<Order>;

    update(order:Order): Promise<Order>;
    
    delete(id:number): Promise<Order>;
}
export default IOrderRepo;