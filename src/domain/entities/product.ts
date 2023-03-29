import Category from "./category";

//definir tu entidad
interface Product{
    id?: number,
    nombreProducto?: string,
    descripcion?: string,
    categoriaId?: number,
    precio?: number,
    categoria?: Category;
    foto?: any,
}
export default Product;