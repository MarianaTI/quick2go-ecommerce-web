import Category from "@/domain/entities/category";
import ICategoryRepo from "@/domain/repositories/ICategoryRepo";
import axios from "axios";

class CategoryRepo implements ICategoryRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/categorias/';
    }
    async getall(): Promise<Category[]> {
        const response = await axios.get<Category[]>(this.url);
        return response.data;
    }
        async getOne(id: number): Promise<Category> {
        const response = await axios.get<Category>(this.url+id);
        return response.data;
    }
    async create(category: Category): Promise<Category> {
        const response = await axios.post<Category>(this.url, category, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    async update(category: Category): Promise<Category> {
        const response = await axios.put<Category>(this.url+ category.id, category, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    async delete(id: number): Promise<Category> {
        const response = await axios.delete<Category>(this.url+id);
        return response.data;
    }
}
export default CategoryRepo;