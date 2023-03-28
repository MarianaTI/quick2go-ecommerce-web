import CreateAccountUseCase from "@/application/usecases/accountUseCase/CreateAccountUseCase";
import AccountRepo from "@/infrastructure/implementation/httpRequest/axios/AccountRepo";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Paper } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Quick2Go
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    secondary: {
      main: '#7E57C2', // cambia el color secundario aquí
    },
  },
});


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const accountRepo = new AccountRepo();
    const createAccountUseCase = new CreateAccountUseCase(accountRepo);
    const account = {
      email: email,
      password: password,

    };
    try {
      const response = await createAccountUseCase.run(account);
      console.log(response);
      // Aquí podrías almacenar la información de la cuenta de usuario en el estado de tu componente o en una cookie
    } catch (error) {
      setError(
        "Las credenciales que has introducido son incorrectas. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('/Quick2Go_web.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily="Paytone One"
              sx={{
                fontSize: 32,
                color: "#333236",
                fontWeight: 600,
                marginBottom: 2
              }}
            >
              Quick2Go
            </Typography>
            <Typography component="h1" variant="h5" sx={{fontFamily: "Quicksand"}}>
              Iniciar sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color= "secondary"
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color= "secondary"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && <p>{error}</p>}
              <Button
                type="submit"
                fullWidth
                color= "secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              {/* <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

{
  /* <form onSubmit={handleSubmit}>
<div>
  <label htmlFor="email">Correo electrónico:</label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
  />
</div>
<div>
  <label htmlFor="password">Contraseña:</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
  />
</div>
{error && <p>{error}</p>}
<button type="submit">Iniciar sesión</button>
</form> */
}
