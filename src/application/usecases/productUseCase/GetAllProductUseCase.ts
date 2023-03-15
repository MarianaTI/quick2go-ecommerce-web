import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";

class GetAllProductUseCase {
    private readonly productRepo: IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run():Promise<Product[]>{
        const gotProduct:Product[] = await this.productRepo.getall();
        return gotProduct;
    }
}
export default GetAllProductUseCase;