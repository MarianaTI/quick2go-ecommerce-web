import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetOrderUseCase {
    private readonly orderRepo: IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run(order:Order):Promise<Order>{
        const gotOrder:Order = await this.orderRepo.getall(order);
        return gotOrder;
    }
}