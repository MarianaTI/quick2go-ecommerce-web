import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class UpdateOrderUseCase {
    private readonly orderRepo:IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run(order:Order):Promise<Order>{
        const updatedOrder:Order = await this.orderRepo.update(order);
        return updatedOrder;
    }
}
export default UpdateOrderUseCase;