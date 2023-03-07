import Product from '../entities/product';

//definir que hara el repositorio => inyeccion dependecia
interface IProductRepo{
    // getall(): Promise<Array<Product>>
    //devolver la funcion
    getall(): Promise<Product[]>;
    //solo uno
    getOne(id:number): Promise<Product>;
    //post
    create(product:Product): Promise<Product>;
    //put
    update(product:Product): Promise<Product>;
    //delete
    delete(id:number): Promise<Product>;
}
export default IProductRepo;