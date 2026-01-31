import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import MenuLeftSidebar from "../ui/MenuLeftSidebar/MenuLeftSidebar";

const MainLayout = () => {
  return (
    <Fragment>
      <MenuLeftSidebar />
      <Header />
      <Footer />
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;
