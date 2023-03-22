import Sale from "@/domain/entities/sale";
import ISaleRepo from "@/domain/repositories/ISaleRepo";

class DeleteSaleUseCase {
    private readonly saleRepo:ISaleRepo;
    constructor (saleRepo:ISaleRepo){
        this.saleRepo = saleRepo;
    }
    async run(id:number):Promise<Sale>{
        const deletedSale = await this.saleRepo.delete(id);
        return deletedSale;
    }
}
export default DeleteSaleUseCase;