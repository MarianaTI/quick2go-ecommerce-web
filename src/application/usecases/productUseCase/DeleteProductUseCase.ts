import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";

class DeleteProductUseCase {
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(id:number):Promise<Product>{
        const deletedProduct = await this.productRepo.delete(id);
        return deletedProduct;
    }
}
export default DeleteProductUseCase;