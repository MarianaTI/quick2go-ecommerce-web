import React, { ReactNode } from "react";
import SideNavigation from "../body";
import { MainContent } from "../layout/style";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div>
      <SideNavigation />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};
export default Layout;