import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";

class GetOneProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(id:number):Promise<Response<Product>>{
        const deletedProduct:Response<Product> = await this.productRepo.getOne(id);
        return deletedProduct;
    }
}
export default GetOneProductUseCase;