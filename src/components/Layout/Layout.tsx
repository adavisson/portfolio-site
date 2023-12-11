import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
