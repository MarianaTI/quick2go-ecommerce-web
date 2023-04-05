import {
    Box, Typography,
  } from "@mui/material";
  import styled from "@emotion/styled";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  

  export const Welcome = styled(Typography)`
    && {
        font-weight: 700;
        font-size: 20px;
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
    }
  `;
  export const IconStyled= styled(FontAwesomeIcon)`
  && {
    font-size: 20px;
    background: white;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 2px 4px #7A797E;
    color: #373739;
    display: flex;
    justify-content: space-between;
  }
`;