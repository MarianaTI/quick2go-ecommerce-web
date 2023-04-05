import React from "react";
import { Box, Button, Grid, Link, styled, TextField, Typography } from "@mui/material";

export const LoginCard = styled(Box)`
    && {
        max-width: 850px;
        width: 100%;
        background: #7E57C2;
        padding: 40px 30px;
    }
  `;
export const BoxForm = styled(Box)`
    && {
        height: 100%;
        width: 100%;
        background: #7E57C2;
    }
  `;
export const Welcome = styled(Typography)`
    && {
        font-size: 20px;
        color: #333236,
        font-family: "Poppins";
        font-weight: 700;
    }
  `;
export const WelcomeBack = styled(Typography)`
    && {
        font-size: 14px;
        color: #373739,
        font-family: "Poppins";
        font-weight: 500;
        padding: 12px 16px 0 0;
    }
  `;
export const BoxLogo = styled(Box)`
    && {
        font-size: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
        font-weight: 700;
        color: #373739;
        font-family: "Paytone One";
        padding: 1.5rem 1.5rem 2.5rem;
    }
  `;
export const ButtonStyled = styled(Button)`
  && {
    border: none;
    border-radius: 8px;
    color:white;
    font-family: "Poppins", sans-serif;
    fontweight: 800;
    background: #9a70de;
    position: relative;
    z-index: 1000;
    padding: 5px;

    &:hover {
      background: #B68AFB;
      color: #373739;
    }
  }
`;
