import CreateProduct from "./api/product/CreateProduct";
import GetAllProduct from "./api/product/GetAllProduct";
import GetOneProduct from "./api/product/GetOneProduct";

function Productos() {
  return (
    <>
      <CreateProduct /> 
      <GetAllProduct />
      <GetOneProduct />
    </>
  );
}

export default Productos;
