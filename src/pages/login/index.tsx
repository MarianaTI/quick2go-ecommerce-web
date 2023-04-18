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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BoxLogo, ButtonStyled, Welcome, WelcomeBack } from "./style";
import { createMuiTheme, Paper } from "@mui/material";
import * as Yup from "yup";
import {
  useFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  FormikValues,
  Formik,
} from "formik";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

interface LoginForm {
  email?: string;
  password?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
  },
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
});

const LoginPage = (props: FormikProps<FormikValues>) => {
  const [values, setValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
      await loginSchema.validate(values, { abortEarly: false });
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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await loginSchema.validate(values, { abortEarly: false });
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
        setSnackbarMessage("Email o contraseña incorrectos");
        setShowErrorSnackbar(true);
        console.error(error);
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
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
              position: "center",
            }}
          />
          <Grid
            item
            xs={13}
            sm={6}
            md={5}
            sx={{
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              padding: 10,
            }}
          >
            <Box
              sx={{
                my: 3,
                mx: 3,
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
                onSubmit={formik.handleSubmit}
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
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <ButtonStyled type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                  Entrar
                </ButtonStyled>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid
                    item
                    style={{ justifyContent: "center", marginRight: 30 }}
                  >
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
              <Snackbar
                open={showErrorSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowErrorSnackbar(false)}
              >
                <MuiAlert
                  severity="error"
                  onClose={() => setShowErrorSnackbar(false)}
                >
                  {snackbarMessage}
                </MuiAlert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default LoginPage;
