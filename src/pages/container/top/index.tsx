import { Box, Typography } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Welcome, Text, IconStyled } from "./style";

const Top = () => {
  return (
    <div className="top">
      <Box>
        <Welcome>Bienvenido a Quick2Go.</Welcome>
        <Text>Hola! Bienvenido de vuelta</Text>
      </Box>
      <Box>
        <Box>
            
        </Box>
      </Box>
    </div>
  );
};

export default Top;
