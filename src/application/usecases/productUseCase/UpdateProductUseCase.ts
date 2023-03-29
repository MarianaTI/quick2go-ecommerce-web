import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";

class UpdateProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(product:Product):Promise<Response<Product>>{
        const updatedProduct:Response<Product> = await this.productRepo.update(product);
        return updatedProduct;
    }
}
export default UpdateProductUseCase;