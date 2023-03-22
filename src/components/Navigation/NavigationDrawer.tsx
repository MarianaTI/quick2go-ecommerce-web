import React, { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Productos from "@/pages/productos";
import Orders from "@/pages/orders";
import Categories from "@/pages/category";
import MovingIcon from "@mui/icons-material/Moving";
import MoreIcon from '@mui/icons-material/MoreVert';
import Venta from "@/pages/sale";
import Home from "@/pages";
import {
  Category,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Help,
  StarBorder,
} from "@mui/icons-material";
import { Collapse, IconButton } from "@mui/material";

const drawerWidth = 240;
const contentWidth = 800;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ListItemOption = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "rgba(127, 104, 166, 0.2)",
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  boxShadow: "none",
  background: "#7E57C2",
  justifyContent: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      background: "white",
      borderRight: "3px solid #7E57C2", // Aquí defines el color de fondo
      ...openedMixin(theme),
    },
  }),
}));

export default function NavigationDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            {/* <LocalGroceryStoreIcon sx={{ color: "black", marginTop:3, marginLeft: 5, marginBottom:5 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily="Paytone One"
              sx={{
                fontSize: 22,
                color: "white",
                fontWeight: 600,
                marginLeft: 4,
                marginBottom: 2,
                marginTop: 1,
              }}
            >
              Quick2Go
            </Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>
          <Divider />
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block", paddingBottom: 4, paddingTop: 2 }}
              onClick={() => setMenudata("Home")}
            >
              <ListItemOption>
                <ListItemIcon>
                  <DashboardIcon
                    sx={{
                      width: 22,
                      height: 22,
                      color: "#49454E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#49454E",
                  }}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemOption>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block", paddingBottom: 2 }}
              onClick={() => setMenudata("Productos")}
            >
              <ListItemOption>
                <ListItemIcon>
                  <LocalGroceryStoreIcon
                    sx={{
                      width: 22,
                      height: 22,
                      color: "#49454E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Productos"
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#49454E",
                  }}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemOption>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block", paddingBottom: 2 }}
              onClick={() => setMenudata("Pedidos")}
            >
              <ListItemOption>
                <ListItemIcon>
                  <LocalShippingIcon
                    sx={{
                      width: 22,
                      height: 22,
                      color: "#49454E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Pedidos"
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#49454E",
                  }}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemOption>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block", paddingBottom: 2 }}
              onClick={() => setMenudata("Categoría")}
            >
              <ListItemOption>
                <ListItemIcon>
                  <Category
                    sx={{
                      width: 22,
                      height: 22,
                      color: "#49454E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Categoría"
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#49454E",
                  }}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemOption>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block", paddingBottom: 2 }}
              onClick={() => setMenudata("Venta")}
            >
              <ListItemOption>
                <ListItemIcon>
                  <MovingIcon
                    sx={{
                      width: 22,
                      height: 22,
                      color: "#49454E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Venta "
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#49454E",
                  }}
                  sx={{
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemOption>
            </ListItem>
          </List>
          <ListItem
            disablePadding
            sx={{ display: "block", paddingBottom: 2, paddingTop: 2 }}
            // onClick={() => setMenudata("Productos")}
          >
            <ListItemOption>
              <ListItemIcon>
                <Help
                  sx={{
                    width: 22,
                    height: 22,
                    color: "#49454E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Ayuda"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontFamily: "Quicksand",
                  fontWeight: 600,
                  color: "#49454E",
                }}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemOption>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block", paddingBottom: 2 }}
            // onClick={() => setMenudata("Productos")}
          >
            <ListItemOption>
              <ListItemIcon>
                <ExitToApp
                  sx={{
                    width: 22,
                    height: 22,
                    color: "#49454E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Salir"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontFamily: "Quicksand",
                  fontWeight: 600,
                  color: "#49454E",
                }}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemOption>
          </ListItem>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: 3,
          width: contentWidth,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginTop: 10,
        }}
      >
        {menudata == "Productos" && <Productos />}
        {menudata == "Pedidos" && <Orders />}
        {menudata == "Categoría" && <Categories />}
        {menudata == "Venta" && <Venta />}
      </Box>
    </Box>
  );
}
