import Category from "../entities/category";

interface ICategoryRepo{
    getall(): Promise<Category[]>;

    getOne(id:number): Promise<Category>;

    create(category:Category): Promise<Category>;

    update(category:Category): Promise<Category>;
    
    delete(id:number): Promise<Category>;
}
export default ICategoryRepo;