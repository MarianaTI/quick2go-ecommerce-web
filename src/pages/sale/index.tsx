import { useEffect, useState } from "react";
import { Typography, styled, Breadcrumbs, Link } from "@mui/material";
import GetAllSale from "../CRUDS/saleCrud/GetAllSale";
import Sale from "@/domain/entities/sale";
import SaleRepo from "@/infrastructure/implementation/httpRequest/axios/SaleRepo";
import GetAllSaleUseCase from "@/application/usecases/saleUseCase/GetAllSaleUseCase";
import Layout from "../layout";

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
    color: #7a797e;
    font-family: "Poppins";
    margin-bottom: 20px;
  }
`;

function Sale() {
  const [values, setValues] = useState<Sale[]>([]);

  const saleRepo = new SaleRepo();
  const getAllSale = new GetAllSaleUseCase(saleRepo);

  useEffect(() => {
    const getAllSaleMethod = async () => {
      try {
        const { data: allSale, status } = await getAllSale.run();
        if (status === 200 && allSale) {
          setValues(allSale);
        }
        console.log(allSale);
      } catch (e) {
        console.error(e);
      }
    };
    getAllSaleMethod();
  }, []);

  return (
    <Layout>
      <div>
        <Welcome>Ventas</Welcome>
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
              Venta
            </Link>
          </Breadcrumbs>
        </div>
        <Text>Aquí puedes observar todas tus ventas realizadas!</Text>
        <GetAllSale values={values} setValues={setValues} />
      </div>
    </Layout>
  );
}
export default Sale;
