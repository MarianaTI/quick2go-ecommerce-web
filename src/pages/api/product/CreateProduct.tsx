import CreateProductUseCase from '@/application/usecases/productUseCase/CreateProductUseCase';
import Product from '@/domain/entities/product';
import ProductRepo from '@/infrastructure/implementation/httpRequest/axios/ProductRepo';
import { ImagePreviewInput } from '@/components/Inputs/ImagePreviewInput';
import React, { SyntheticEvent, useState } from 'react'
import ImageInput from '@/components/Inputs/ImageInput/ImageInput';

const CreateProduct = () => {
  //state
  const [values, setValues] = useState<Product>({});

  const productRepo = new ProductRepo();
  const createProduct = new CreateProductUseCase(productRepo);

  const postProductos = async (e:any) => {
    //renderizar para evitar que se recargue la pagina
    e.preventDefault();
    console.log(e);

    try {
      const createdProduct: Product = await createProduct.run(values);
      console.log(createdProduct);
      console.log(values);
    } catch (err) {
      console.error(err);
    }
  };
  //funciones
  //[] => acceder a las propiedades de un objeto dinamica
  const handleChange = (e:any) =>{
    // destructuracion
    const {name, value} = e.target;
    setValues({
      //operador de propagacion => acceder a todos los valores
      ...values,
      [name]:value,
    });
  };
  const handleUpdateFiles = (pictures: any) => setValues({ ...values, foto: pictures });
  return (
    <div>
      <form onSubmit={postProductos}>
        <label htmlFor="nombreProducto">Nombre</label><br></br>
        <input type="text"
         name="NombreProducto" 
         id="nombreProducto" 
         value={values.nombreProducto} 
         onChange={handleChange}/>
         <br/>

        <label htmlFor="descripcion">Descripción</label><br></br>
        <input type="text" name="Descripcion" id="descripcion" value={values.descripcion} onChange={handleChange}></input><br></br>

        <label htmlFor="categoriaId">Id categoria</label><br></br>
        <input type="text" name="CategoriaId" id="categoriaId" value={values.categoria?.id} onChange={handleChange}></input><br></br>

        <label htmlFor="precio">Precio</label><br></br>
        <input type="text" name="Precio" id="precio" value={values.precio} onChange={handleChange}></input><br></br>

        <label htmlFor="foto">Foto</label><br></br>
        <ImageInput updatePictureCb={handleUpdateFiles} size='200px' radius='15px'/>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}
export default CreateProduct;