import Product from '../entities/product';
import Response from '../entities/response';

//definir que hara el repositorio => inyeccion dependecia
interface IProductRepo{
    // getall(): Promise<Array<Product>>
    //devolver la funcion
    getall(): Promise<Response<Product[]>>;
    //solo uno
    getOne(id:number): Promise<Response<Product>>;
    //post
    create(product:Product, token:string): Promise<Response<Product>>;
    //put
    update(product:Product): Promise<Response<Product>>;
    //delete
    delete(id:number): Promise<Response<Product>>;
}
export default IProductRepo;