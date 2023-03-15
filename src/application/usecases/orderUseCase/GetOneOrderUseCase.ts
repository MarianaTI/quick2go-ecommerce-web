import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class GetOneOrderUseCase {
    private readonly orderRepo:IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run(id:number):Promise<Order>{
        const gotOneOrder = await this.orderRepo.getOne(id);
        return gotOneOrder;
    }
}
export default GetOneOrderUseCase;