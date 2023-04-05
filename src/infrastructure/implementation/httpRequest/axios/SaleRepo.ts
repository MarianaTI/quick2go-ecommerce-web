import Sale from "@/domain/entities/sale";
import ISaleRepo from "@/domain/repositories/ISaleRepo";
import axios from "axios";
import Response from "@/domain/entities/response";

class SaleRepo implements ISaleRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/ventas/';
    }
    async getall(): Promise<Response<Sale[]>> {
        const response = await axios.get<Sale[]>(this.url);
        return response;
    }
    async getOne(id: number): Promise<Response<Sale>> {
        const response = await axios.get<Sale>(this.url+id);
        return response;
    }
    async create(sale: Sale): Promise<Response<Sale>> {
        const response = await axios.post<Sale>(this.url, sale);
        return response;
    }
    async update(sale: Sale): Promise<Response<Sale>> {
        const response = await axios.put<Sale>(this.url+sale.id, sale, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async delete(id: number): Promise<Response<Sale>> {
        const response = await axios.delete<Sale>(this.url+id);
        return response;
    }
}
export default SaleRepo;