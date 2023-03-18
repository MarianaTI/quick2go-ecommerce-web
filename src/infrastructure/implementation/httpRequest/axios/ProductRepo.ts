import Product from "@/domain/entities/product";
import IProductRepo from "@/domain/repositories/IProductRepo";
import axios from "axios";

class ProductRepo implements IProductRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/productos/';
    }
    //GET ALL PRODUCT
    async getall(): Promise<Product[]> {
        const response = await axios.get<Product[]>(this.url);
        return response.data;
    }
    //GET ONE => Id
    async getOne(id: number): Promise<Product> {
        const response = await axios.get<Product>(this.url+id);
        return response.data;
    }
    async create(product: Product): Promise<Product> {
        const response = await axios.post<Product>(this.url, product, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    async update(product: Product): Promise<Product> {
        const response = await axios.put<Product>(this.url+product.id);
        return response.data;
    }
    async delete(id: number): Promise<Product> {
        const response = await axios.delete<Product>(this.url+id);
        return response.data;
    }

}
export default ProductRepo;