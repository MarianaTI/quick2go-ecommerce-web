import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";

class GetAllProductUseCase {
    private readonly productRepo: IProductRepo;
    constructor (productRepo:IProductRepo){
        this.productRepo = productRepo;
    }
    async run():Promise<Response<Product[]>>{
        const getProduct:Response<Product[]> = await this.productRepo.getall();
        return getProduct;
    }
}
export default GetAllProductUseCase;