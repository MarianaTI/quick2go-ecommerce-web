import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";

class CreateProductUseCase {
    //definir el repositorio
    private readonly productRepo:IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run(product:Product, token:string):Promise<Response<Product>>{
        const createdProduct:Response<Product> = await this.productRepo.create(product, token);
        return createdProduct;
    }
}
export default CreateProductUseCase;