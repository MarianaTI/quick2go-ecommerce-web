import GetOneOrderUseCase from "@/application/usecases/orderUseCase/GetOneOrderUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import React, {useState} from "react";

const GetOneProduct = () => {
    const [values, setValues] = useState<Product | null>(null);
    const [productId, setProductId] = useState<number>(0);

    const productRepo = new ProductRepo();
    const getOneProduct = new GetOneOrderUseCase(productRepo);

    const oneProduct = async () => {
        try {
            const gotOneProduct = await getOneProduct.run(productId);
            setValues(gotOneProduct);
            console.log(gotOneProduct);
        } catch (e) {
            console.error(e);  
        }
    };

    return (
        <>
            <input type="number" value={productId} onChange={(e) => setProductId(parseInt(e.target.value))} />
            <button onClick={oneProduct}>Get Product</button>
            {values && (
                <div>
                    <p>{values.id}</p>
                    <p>{values.nombreProducto}</p>
                    <p>{values.descripcion}</p>
                    <p>{values.precio}</p>
                    <p>{values.precio}</p>
                    <p>{values.categoria?.nombre}</p>
                </div>
            )}
        </>
    );
};
export default GetOneProduct;