import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const BoxStyled = styled(Box)`
  && {
    position: fixed;
    width: 240px;
    background: #fff9ff;
    top: 0;
    left: 0;
    height: 100%;
    box-shadow: 1px 0px 4px #bdbdbd;
    gap: 3rem;
    overflow: auto;
  }
`;
export const ListStyled = styled(List)`
  && {
    // padding: 1rem;
    // position: relative;
    // height: 100vh;
  }
`;
export const LogoStyled = styled(Box)`
  && {
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    font-weight: 700;
    color: #373739;
    font-family: "Paytone One";
    padding: 1.5rem 1.5rem 0;
  }
`;
export const ItemStyled = styled(ListItem)`
  && {
    margin: 12px 0;
    padding: 0 2px;
    display: flex;
    flex-direction: column;
  }
`;
export const IconStyled = styled(ListItemIcon)`
  && {
    min-width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }
`;
export const ListItems = styled(ListItem)`
    && {
      padding: 0.2rem 1.5rem;
      width: 100%;
      position: relative;
      transition: 0;
      ::before {
        position: absolute;
        content: "";
        height: 0%;
        left: 0;
        top: 0;
        width: 5px;
        bottom: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background: #7e57c2;
      }
      &:hover {
        cursor: pointer;
        color: #7e57c2;
        transition: 0;
        > div:first-of-type {
          color: #7e57c2;
        }
      }
      .MuiTypography-root {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #373739;
        font-family: Poppins;
        font-weight: 500;
        padding: 12px 12px 10px 0;
        cursor: pointer
        &:hover {
          color: #7e57c2;
        }
      }
      .MuiSvgIcon-root {
        cursor: pointer;
        margin-right: 12px;

        &:hover {
          color: #7e57c2;
        }
      }
      &:hover {
        .MuiTypography-root,
        .MuiSvgIcon-root {
          color: #7e57c2;
        }
      }
      &:hover::before{
        height: 80%;
        transition: .3s ease;
      }
    }
  `;
export const ButtonStyled = styled(Button)`
  && {
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px #949397;
    padding: 0.8rem 1rem;
    color: #373739;
    font-family: "Poppins", sans-serif;
    fontweight: 800;
    background: #f0e9f0;
    opacity: 1;
    position: relative;
    z-index: 1000;

    &:hover {
      background: #9a70de;
      color: white;
    }
  }
`;
export const BoxHelp = styled(Box)`
  && {
    width: 100%;
    padding: 1rem;
    text-align: center;
    position: relative;
  }
`;
export const BoxContent = styled(Box)`
  && {
    padding: 1rem;
    position: relative;
    background: #d3a5ff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px #7a797e;
  }
`;
export const IconStyledHelp = styled(FontAwesomeIcon)`
  && {
    position: absolute;
    background: white;
    color: #7e57c2;
    border: 10px solid white;
    font-size: 1.5rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
`;
export const HelpText = styled(Typography)`
  && {
    font-size: 14px;
    padding: 1rem 0;
    font-weight: 800;
    color: #212121;
    font-family: "Poppins", sans-serif;
  }
`;
export const HelpTextContinue = styled(Typography)`
  && {
    font-size: 14px;
    color: #212121;
    font-family: "Poppins", sans-serif;
    padding-bottom: 1rem;
  }
`;
export const BoxBackground1 = styled(Box)`
  && {
    position: absolute;
    background: #fff9ff;
    border-radius: 50%;
    opacity: 0.3;
    height: 100px;
    width: 100px;
    top: -50px;
    left: -50px;
    box-shadow: 2px #9e9e9e;
  }
`;
export const BoxBackground2 = styled(Box)`
  && {
    position: absolute;
    background: #fff9ff;
    border-radius: 50%;
    opacity: 0.3;
    height: 150px;
    width: 150px;
    bottom: -80px;
    right: -70px;
    box-shadow: 2px #9e9e9e;
    z-index: 1;
  }
`;
