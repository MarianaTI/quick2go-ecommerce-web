import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";

class DeleteProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(id:number):Promise<Response<Product>>{
        const deletedProduct:Response<Product> = await this.productRepo.delete(id);
        return deletedProduct;
    }
}
export default DeleteProductUseCase;