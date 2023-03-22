import Sale from "../entities/sale";

interface ISaleRepo{
    getall(): Promise<Sale[]>;

    getOne(id:number): Promise<Sale>;

    create(sale:Sale): Promise<Sale>;

    update(sale:Sale): Promise<Sale>;
    
    delete(id:number): Promise<Sale>;
}
export default ISaleRepo;