import { login } from "@/feacture/sessionslice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider,  } from "@mui/material/styles";
import { BoxLogo, ButtonStyled, Welcome, WelcomeBack } from "./style";
import { createMuiTheme, Paper } from "@mui/material";

interface LoginForm {
  email?: string;
  password?: string;
}
const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: '#7e57c2' // aquí puedes reemplazar el color actual por el que deseas utilizar como color primario
      }
    }
  });
  
const theme = createTheme({
    palette: {
        primary: {
          main: '#7e57c2' // aquí puedes reemplazar el color actual por el que deseas utilizar como color primario
        }
      }
});

const LoginPage = () => {
  const [values, setValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://www.quick2goapiprod.somee.com/api/cuentas/login/",
        values
      );
      if (response.status === 200) {
        const token = response.data.token;
        dispatch(login(token));
        router.push("/body");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            md={7}
            sx={{
              backgroundImage: "url(./login.svg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              padding: 7,
            }}
          >
            <Box
              sx={{
                my: 10,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
              }}
            >
              <BoxLogo>
                <img
                  src="./quick2go-new.png"
                  width={65}
                  style={{ marginRight: 3 }}
                />
                Quick2Go
              </BoxLogo>
              <Welcome
                style={{
                  fontSize: 20,
                  color: "#373739",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                }}
              >
                Bienvenido
              </Welcome>
              <WelcomeBack
                style={{
                  fontSize: 14,
                  color: "#7A797E",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                }}
              >
                Bienvenido de vuelta! Por favor ingresa tus datos
              </WelcomeBack>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  style={{
                    fontSize: 14,
                    color: "#373739",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  color="primary"
                />
                <TextField
                  style={{
                    fontSize: 14,
                    color: "#373739",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ButtonStyled type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                  Entrar
                </ButtonStyled>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item style={{ justifyContent: "center", marginRight:30 }}>
                    <WelcomeBack
                      style={{
                        fontSize: 14,
                        color: "#373739",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      Aún no tienes una cuenta?
                      <Link
                        href="#"
                        style={{
                          fontSize: 14,
                          color: "#7e57c2",
                          fontFamily: "Poppins",
                          fontWeight: 700,
                        }}
                      >
                        {" Registrate ahora!"}
                      </Link>
                    </WelcomeBack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default LoginPage;

// <form onSubmit={handleSubmit}>
//     <div>
//         <label htmlFor="email">Correo electrónico:</label>
//         <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
//     </div>
//     <div>
//         <label htmlFor="password">Contraseña:</label>
//         <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
//     </div>
//     <button type="submit">Iniciar sesión</button>
// </form>
