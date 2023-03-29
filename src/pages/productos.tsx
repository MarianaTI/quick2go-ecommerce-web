import GetAllProductUseCase from "@/application/usecases/productUseCase/GetAllProductUseCase";
import Product from "@/domain/entities/product";
import ProductRepo from "@/infrastructure/implementation/httpRequest/axios/ProductRepo";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CreateProduct from "./product/CreateProduct";
import GetAllProduct from "./product/GetAllProduct";
import GetOneProduct from "./product/GetOneProduct";
import UpdateProduct from "./product/UpdateProduct";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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
    <>
    <Typography
        sx={{
          fontSize: 42,
          color: "#49454E",
          paddingBottom: 1,
          fontWeight: 600,
          fontFamily: "Quicksand",
        }}
      >
        Productos
      </Typography>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            fontSize: 16,
            paddingBottom: 5,
            fontFamily: "Quicksand",
            fontWeight: 800,
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
      <UpdateProduct />
      <CreateProduct setProduct={setValues}/> 
      <GetAllProduct values={values} setValues={setValues} />
      <GetOneProduct />
    </>
  );
}

export default Productos;
