import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBasketShopping,
  faTruckFast,
  faCartShopping,
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  BoxBackground1,
  BoxBackground2,
  BoxContent,
  BoxHelp,
  BoxStyled,
  ButtonStyled,
  HelpText,
  HelpTextContinue,
  IconStyled,
  IconStyledHelp,
  ItemStyled,
  ListItems,
  ListStyled,
  LogoStyled,
} from "./style";
import { Box, Link, ListItemButton, ListItemText } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext } from "react";
import NextLink from "next/link";
import { useState } from "react";

const contentWidth = 800;
const SideNavigation = () => {

  const router = useRouter();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <BoxStyled component="nav" sx={{ flexShrink: { sm: 0 } }}>
          <ListStyled>
            <LogoStyled>
              <img
                src="./quick2go-new.png"
                alt=""
                width={40}
                height={40}
                style={{ marginRight: ".5rem", padding: ".2rem" }}
              />
              Quick2Go
            </LogoStyled>
            <ItemStyled>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  fontSize: 14,
                  color: "#333236",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "92%",
                  padding: "0.5rem 1.5rem 0.5rem",
                }}
              />
              <ListItems>
                <IconStyled>
                  <FontAwesomeIcon icon={faHouse} />
                </IconStyled>
                <Link href="/dashboard"  style={{textDecoration:"none", padding: 0}}>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    display: "flex",
                      alignItems: "center",
                      fontSize: 14,
                      color: "#373739",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      padding: "12px 16px 12px 0",
                  }}
                />
                </Link>
              </ListItems>
              <ListItems>
                  <IconStyled>
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </IconStyled>
                  <Link href="/products"  style={{textDecoration:"none", padding: 0}}>
                  <ListItemText
                    primary="Productos"
                    primaryTypographyProps={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 14,
                      color: "#373739",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      padding: "12px 16px 12px 0",
                    }}
                  />
                  </Link>
              </ListItems>
              <ListItems>
                <IconStyled>
                  <FontAwesomeIcon icon={faTruckFast} />
                </IconStyled>
                <Link href="/orders"  style={{textDecoration:"none", padding: 0}}>
                <ListItemText
                  primary="Pedidos"
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    color: "#373739",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    padding: "12px 16px 12px 0",
                  }}
                />
                </Link>
              </ListItems>
              <ListItems>
                <IconStyled>
                  <FontAwesomeIcon icon={faCartShopping} />
                </IconStyled>
                <Link href="/sale"  style={{textDecoration:"none", padding: 0}}>
                <ListItemText
                  primary="Venta"
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    color: "#373739",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    padding: "12px 16px 12px 0",
                  }}
                />
                </Link>
              </ListItems>
              <ListItemText
                primary="Opciones"
                primaryTypographyProps={{
                  fontSize: 14,
                  color: "#333236",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "92%",
                  padding: "0.5rem 1.5rem 0.5rem",
                }}
              />
              <ListItems>
                <IconStyled>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </IconStyled>
                <ListItemText
                  primary="Salir"
                  primaryTypographyProps={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    color: "#373739",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    padding: "12px 16px 12px 0",
                  }}
                />
              </ListItems>
            </ItemStyled>
            <BoxHelp>
              <IconStyledHelp icon={faCircleInfo} />
              <BoxContent>
                <BoxBackground1></BoxBackground1>
                <BoxBackground2></BoxBackground2>
                <HelpText>Ayuda</HelpText>
                <HelpTextContinue>
                  ¿Estas teniendo problemas? Contáctanos para más información
                </HelpTextContinue>
                <ButtonStyled>Centro de ayuda</ButtonStyled>
              </BoxContent>
            </BoxHelp>
          </ListStyled>
        </BoxStyled>
        <Box component="main">
        </Box>
      </Box>
    </>
  );
};

export default dynamic(() => Promise.resolve(SideNavigation), { ssr: false });
