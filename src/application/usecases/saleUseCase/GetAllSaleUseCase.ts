import Sale from "@/domain/entities/sale";
import ISaleRepo from "@/domain/repositories/ISaleRepo";

class GetAllSaleUseCase {
    private readonly saleRepo: ISaleRepo;
    constructor (saleRepo:ISaleRepo){
        this.saleRepo = saleRepo;
    }
    async run():Promise<Sale[]>{
        const gotSale:Sale[] = await this.saleRepo.getall();
        return gotSale;
    }
}
export default GetAllSaleUseCase;