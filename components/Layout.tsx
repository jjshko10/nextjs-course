import { Header } from "./Header";
import { Footer } from "./Footer";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;