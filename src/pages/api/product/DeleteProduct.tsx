import DeleteProductUseCase from "@/application/usecases/productUseCase/DeleteProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import React, {useState} from "react";

const DeleteProduct = () => {
    const [values, setValues] = useState<Product>({});

    const productRepo = new ProductRepo();
    const deleteProduct = new DeleteProductUseCase(productRepo);

    const deleteProductById = async (id:number) => {
        try {
            const deletedProduct = await deleteProduct.run(id);
            console.log(deletedProduct);
        } catch (e) {
            console.error(e);
        }
    }
}
export default DeleteProduct;