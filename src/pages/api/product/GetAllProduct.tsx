import DeleteProductUseCase from "@/application/usecases/productUseCase/DeleteProductUseCase";
import GetAllProductUseCase from "@/application/usecases/productUseCase/GetAllProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const GetAllProduct = () => {
    const [values, setValues] = useState<Product[]>([]);
    const [deletedProduct, setDeletedProduct] = useState(false); 

    const productRepo = new ProductRepo();
    const getAllProduct = new GetAllProductUseCase(productRepo);
    const deleteProduct = new DeleteProductUseCase(productRepo);

    useEffect(() => {
        const getAllProductMethod = async () => {
            try {
                const allProduct: Product[] = await getAllProduct.run();
                setValues(allProduct);
                console.log(allProduct);
            } catch (e) {
                console.error(e);
            }
        };
        getAllProductMethod();
    }, [deletedProduct]);

    const deleteProductById = async (id:number = 0) => {
        try {
            const deletedProduct = await deleteProduct.run(id);
            setDeletedProduct(true);
            console.log(deletedProduct);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"> Código </TableCell>
                            <TableCell align="center"> Producto </TableCell>
                            <TableCell align="center"> Descripción </TableCell>
                            <TableCell align="center"> Precio </TableCell>
                            <TableCell align="center"> Categoria </TableCell>
                            <TableCell align="center"> Foto </TableCell>
                            <TableCell align="center"> Control </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {values.map((values) => (
                            <TableRow key={values.id}>
                                <TableCell align="center"># {values.id} </TableCell>
                                <TableCell align="center">{values.nombreProducto} </TableCell>
                                <TableCell align="center">{values.descripcion} </TableCell>
                                <TableCell align="center">$ {values.precio} </TableCell>
                                <TableCell align="center">{values.categoria?.nombre} </TableCell>
                                <TableCell align="center"><img src={values.foto} width={50} height={50}/></TableCell>
                                <TableCell align="center"><Button onClick={() => deleteProductById(values.id)}>Eliminar</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default GetAllProduct;