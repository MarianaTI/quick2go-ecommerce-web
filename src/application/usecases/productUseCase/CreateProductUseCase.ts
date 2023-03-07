import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";

class CreateProductUseCase {
    //definir el repositorio
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(product:Product):Promise<Product>{
        const createdProduct:Product = await this.productRepo.create(product);
        return createdProduct;
    }
}
export default CreateProductUseCase;