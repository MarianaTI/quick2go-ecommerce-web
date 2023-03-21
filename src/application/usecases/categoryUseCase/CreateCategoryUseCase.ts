import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class CreateCategoryUseCase {
    private readonly categoryRepo:ICategoryRepo;
    constructor (categoryRepo:ICategoryRepo){
        this.categoryRepo = categoryRepo;
    }
    async run(category:Category):Promise<Category>{
        const createdCategory:Category = await this.categoryRepo.create(category);
        return createdCategory;
    }
}
export default CreateCategoryUseCase;