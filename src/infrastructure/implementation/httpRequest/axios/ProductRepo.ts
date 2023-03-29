import Product from "@/domain/entities/product";
import Response from "@/domain/entities/response";
import IProductRepo from "@/domain/repositories/IProductRepo";
import axios from "axios";
import { useState } from "react";

class ProductRepo implements IProductRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/productos/';
    }
    
    //GET ALL PRODUCT
    async getall(): Promise<Response<Product[]>> {
        const response = await axios.get<Product[]>(this.url);
        return response;
    }
    //GET ONE => Id
    async getOne(id: number): Promise<Response<Product>> {
        const response = await axios.get<Product>(this.url+id);
        return response;
    }
    async create(product: Product, token:string): Promise<Response<Product>> {
        const response = await axios.post<Product>(this.url, product, {
            headers:{
                Authorization: 'Bearer' + token, 
                'Content-Type': 'multipart/form-data', Accept: "*/*"
            }
        });
        return response;
    }
    async update(product: Product): Promise<Response<Product>> {
        const response = await axios.put<Product>(this.url+product.id, product,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        
        return response;
        
    }
    async delete(id: number): Promise<Response<Product>> {
        const response = await axios.delete<Product>(this.url+id);
        return response;
    }

}
export default ProductRepo;