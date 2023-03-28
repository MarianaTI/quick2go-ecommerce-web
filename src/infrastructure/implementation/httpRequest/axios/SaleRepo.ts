import Sale from "@/domain/entities/sale";
import ISaleRepo from "@/domain/repositories/ISaleRepo";
import axios from "axios";

class SaleRepo implements ISaleRepo{
    private readonly url:string;
    constructor(){
        this.url = 'http://www.quick2goapiprod.somee.com/api/ventas/';
    }
    async getall(): Promise<Sale[]> {
        const response = await axios.get<Sale[]>(this.url);
        return response.data;
    }
    async getOne(id: number): Promise<Sale> {
        const response = await axios.get<Sale>(this.url+id);
        return response.data;
    }
    async create(sale: Sale): Promise<Sale> {
        const response = await axios.post<Sale>(this.url, sale);
        return response.data;
    }
    async update(sale: Sale): Promise<Sale> {
        const response = await axios.put<Sale>(this.url+sale.id, sale, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
    async delete(id: number): Promise<Sale> {
        const response = await axios.delete<Sale>(this.url+id);
        return response.data;
    }
}
export default SaleRepo;