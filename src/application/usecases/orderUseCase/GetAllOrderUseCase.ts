import Order from "@/domain/entities/order";
import IOrderRepo from "@/domain/repositories/IOrderRepo";
import Response from "@/domain/entities/response";

class GetAllOrderUseCase {
    private readonly orderRepo: IOrderRepo;
    constructor (orderRepo:IOrderRepo){
        this.orderRepo = orderRepo;
    }
    async run():Promise<Response<Order[]>>{
        const gotOrder:Response<Order[]> = await this.orderRepo.getall();
        return gotOrder;
    }
}
export default GetAllOrderUseCase;