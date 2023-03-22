import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";

class GetOneCategoryUseCase {
    private readonly categoryRepo:ICategoryRepo;
    constructor (categoryRepo:ICategoryRepo){
        this.categoryRepo = categoryRepo;
    }
    async run(id:number):Promise<Category>{
        const getOne = await this.categoryRepo.getOne(id);
        return getOne;
    }
}
export default GetOneCategoryUseCase;