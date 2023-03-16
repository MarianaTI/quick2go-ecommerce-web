import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";

class DeleteOrderUseCase {
    private readonly orderRepo:IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run(id:number):Promise<Order>{
        const deletedOrder = await this.orderRepo.delete(id);
        return deletedOrder;
    }
}
export default DeleteOrderUseCase;