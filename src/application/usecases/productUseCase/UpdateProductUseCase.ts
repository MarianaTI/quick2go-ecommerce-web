import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";

class UpdateProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(product:Product):Promise<Product>{
        const updatedProduct = await this.productRepo.update(product);
        return updatedProduct;
    }
}
export default UpdateProductUseCase;