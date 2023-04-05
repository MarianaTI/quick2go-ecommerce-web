import Sale from "@/domain/entities/sale";
import ISaleRepo from "@/domain/repositories/ISaleRepo";
import Response from "@/domain/entities/response";

class GetAllSaleUseCase {
    private readonly saleRepo: ISaleRepo;
    constructor (saleRepo:ISaleRepo){
        this.saleRepo = saleRepo;
    }
    async run():Promise<Response<Sale[]>>{
        const gotSale:Response<Sale[]> = await this.saleRepo.getall();
        return gotSale;
    }
}
export default GetAllSaleUseCase;