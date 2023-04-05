import Sale from "../entities/sale";
import Response from "../entities/response";

interface ISaleRepo{
    getall(): Promise<Response<Sale[]>>;

    getOne(id:number): Promise<Response<Sale>>;

    create(sale:Sale): Promise<Response<Sale>>;

    update(sale:Sale): Promise<Response<Sale>>;
    
    delete(id:number): Promise<Response<Sale>>;
}
export default ISaleRepo;