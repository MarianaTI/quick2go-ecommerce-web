import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class DeleteCategoryUseCase {
    private readonly categoryRepo:ICategoryRepo;
    constructor (categoryRepo:ICategoryRepo){
        this.categoryRepo = categoryRepo;
    }
    async run(id:number):Promise<Category>{
        const deletedCategory = await this.categoryRepo.delete(id);
        return deletedCategory;
    }
}
export default DeleteCategoryUseCase;