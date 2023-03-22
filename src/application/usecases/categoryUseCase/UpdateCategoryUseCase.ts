import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class UpdateCategoryUseCase {
    private readonly categoryRepo:ICategoryRepo;
    constructor (categoryRepo:ICategoryRepo){
        this.categoryRepo = categoryRepo;
    }
    async run(category:Category):Promise<Category>{
        const updatedCategory = await this.categoryRepo.update(category);
        return updatedCategory;
    }
}
export default UpdateCategoryUseCase;