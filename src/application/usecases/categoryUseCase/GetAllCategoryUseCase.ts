import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class GetAllCategoryUseCase {
    private readonly categoryRepo: ICategoryRepo;
    constructor (categoryRepo:ICategoryRepo){
        this.categoryRepo = categoryRepo;
    }
    async run():Promise<Category[]>{
        const gotCategory:Category[] = await this.categoryRepo.getall();
        return gotCategory;
    }
}
export default GetAllCategoryUseCase;