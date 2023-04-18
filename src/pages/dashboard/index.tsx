import GetAllOrderUseCase from "@/application/usecases/orderUseCase/GetAllOrderUseCase";
import Order from "@/domain/entities/order";
import OrderRepo from "@/infrastructure/implementation/httpRequest/axios/OrderRepo";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import GetAllOrder from "../CRUDS/orderCrud/GetAllOrder";
import Layout from "../layout";
import {
  Text,
  Welcome,
  Header,
  CardSection,
  RightCard,
  VideoDiv,
  LeftCard,
  TextInfo,
  TextContext,
  MapsText,
  WelcomeText,
} from "./style";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import GoogleMaps from "@/components/Mapa/GoogleMaps";
import GetAllSale from "../CRUDS/saleCrud/GetAllSale";
import SaleRepo from "@/infrastructure/implementation/httpRequest/axios/SaleRepo";
import GetAllSaleUseCase from "@/application/usecases/saleUseCase/GetAllSaleUseCase";
import Sale from "../sale";
import SaleDashboard from "../CRUDS/saleCrud/SaleDashboard";
import { DateCalendar } from "@mui/x-date-pickers";

const Dashboard = () => {
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
      {/* <Box sx={{background: "grey", margin: "1%", borderRadius: "10px"}}> */}
      <Header>
        <Welcome>Bienvenido de nuevo</Welcome>
        <Text>Hola ...! Gracias por estar de vuelta</Text>
      </Header>
      <CardSection>
        <RightCard>
          <TextInfo>Crea y vende extraordinarios productos</TextInfo>
          <TextContext>
            La venta de productos artesanales han crecido al rededor del mundo
          </TextContext>
          <VideoDiv>
            <video src="./frutas.mp4" autoPlay loop muted></video>
          </VideoDiv>
        </RightCard>
        <LeftCard>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="">
                <DateCalendar />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider> */}
        </LeftCard>
      </CardSection>
      <Box style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box style={{ flex: 2 }}>
          <WelcomeText>Ordenes recientes</WelcomeText>
          <SaleDashboard values={values} setValues={setValues} />
        </Box>
        <Box
          style={{ flex: 1 }}
          // sx={{
          //   justifyContent: "center",
          //   alignItems: "center",
          //   background: "grey",
          //   margin: 4,
          // }}
        >
          <MapsText>Puntos en el mapa</MapsText>
          <GoogleMaps />
        </Box>
      </Box>
      {/* </Box> */}
    </Layout>
  );
};

export default Dashboard;
