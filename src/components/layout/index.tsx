import type React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout:React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </> 
  );
};
