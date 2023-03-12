import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetAllOrderUseCase {
    private readonly orderRepo: IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run():Promise<Order[]>{
        const gotOrder:Order[] = await this.orderRepo.getall();
        return gotOrder;
    }
}
export default GetAllOrderUseCase;