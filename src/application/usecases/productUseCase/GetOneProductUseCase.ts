import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";

class GetOneProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(id:number):Promise<Product>{
        const deletedProduct = await this.productRepo.getOne(id);
        return deletedProduct;
    }
}
export default GetOneProductUseCase;