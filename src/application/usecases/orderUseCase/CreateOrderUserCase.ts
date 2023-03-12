import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class CreateOrderUseCase {
    private readonly orderRepo:IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run(order:Order):Promise<Order>{
        const createdOrder:Order = await this.orderRepo.create(order);
        return createdOrder;
    }
}
export default CreateOrderUseCase;