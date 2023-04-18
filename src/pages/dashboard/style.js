import {
  Box,
  Button,
  Grid,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";

export const Welcome = styled(Typography)`
  && {
    margin-top: 2%;
    font-size: 25px;
    color: #373739;
    font-weight: 800;
    z-index: 100;
    font-family: "Poppins";
  }
`;
export const Text = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 14px;
    color: #7a797e;
    font-family: "Poppins";
  }
`;
export const DateStyled = styled(Typography)`
  && {
    position: fixed;
    top: 20px;
    right: 55px;
    font-size: 14px;
    font-family: "Poppins";
    fontweight: "bold";
    color: #373739;
    padding: 1rem;
  }
`;
export const WelcomeText = styled(Typography)`
  && {
    margin-top: 2%;
    margin-botton: 12%;
    font-size: 20px;
    color: #373739;
    font-weight: 800;
    z-index: 100;
    font-family: "Poppins";
  }
`;
export const BoxContent = styled(Box)`
  && {
    position: fixed;
    top: 30px;
    right: 50px;
    width: 165px;
    height: 30px;
    padding: 5px;
    background: #E6E5EA;
    border-radius: 5px;
  }
`;
export const Header = styled(Box)`
  && {
    justify-content: space-between;
  }
`;
export const CardSection = styled(Box)`
  && {
    display: flex;
    gap: 1rem;
    
  }
`;
export const RightCard = styled(Box)`
  && {
    display: flex;
    position: relative;
    flex-basis: 65%;
    height: 250px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 4%;
    margin-right: 4%;
    padding: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
`;
export const VideoDiv = styled(Box)`
  && {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   
  }
`;
export const LeftCard = styled(Box)`
  && {
    display:flex;
    position: relative;
    justify-content: space-between;
  }
`;
export const TextInfo = styled(Typography)`
  && {
    z-index: 100;
    font-size: 20px;
    color: #FFF2E6;
    font-weight: 800;
    font-family: "Poppins";
  }
`;
export const TextContext = styled(Typography)`
  && {
    z-index: 100;
    font-weight: 800;
    font-size: 14px;
    font-family: "Poppins";
    color: #FFF2E6;
  }
`;
export const MapsText = styled(Typography)`
  && {
    margin-top: 4%;
    margin-left: 15%;
    font-size: 20px;
    color: #373739;
    font-weight: 800;
    z-index: 100;
    font-family: "Poppins";
  }
`;