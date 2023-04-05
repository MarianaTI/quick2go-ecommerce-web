import GetAllProductUseCase from "@/application/usecases/productUseCase/GetAllProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import { Breadcrumbs, Link, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CreateProduct from "../productCrud/CreateProduct";
import GetAllProduct from "../productCrud/GetAllProduct";
import GetOneProduct from "../productCrud/GetOneProduct";
import UpdateProduct from "../productCrud/UpdateProduct";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export const Welcome = styled(Typography)`
&& {
    font-weight: 700;
    font-size: 40px;
    color: #373739;
    font-family: "Poppins";
}
`;
export const Text = styled(Typography)`
&& {
    font-weight: 500;
    font-size: 14px;
    color: #7A797E;
    font-family: "Poppins";
    margin-bottom:45px;
}
`;
function Productos() {

  const [values, setValues] = useState<Product[]>([]);
  const productRepo = new ProductRepo();
  const getAllProduct = new GetAllProductUseCase(productRepo);

  useEffect(() => {
    const getAllProductMethod = async () => {
      try {
        const {data: allProduct,status} = await getAllProduct.run();
          if (status === 200 && allProduct) {
            setValues(allProduct)
          }
        console.log(allProduct);
      } catch (e) {
        console.error(e);
      }
    };
    getAllProductMethod();
  }, []);

  return (
    <div className="view">
      <Welcome>Productos</Welcome>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color: "#7A797E",
            fontSize: 14,
            paddingBottom: 2,
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          <Link underline="hover" color="inherit" href="../orders">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="#7E57C2"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Productos
          </Link>
        </Breadcrumbs>
      </div>
      <Text>Aquí puedes llevar el control de tus productos!</Text>
      <UpdateProduct />
      <CreateProduct setProduct={setValues}/> 
      <GetAllProduct values={values} setValues={setValues} />
      {/* <GetOneProduct /> */}
    </div>
  );
}

export default Productos;
