import { Box } from "@mui/system";
import React from "react";
import Activity from "./activity/activity";
import Top from "./top";
import { Bottom, MainContent } from "./style";
import Products from "../products/index"


const Container = () => {
  return (
    <>
      <MainContent>

          <Activity />
      </MainContent>
    </>
  );
};

export default Container;
