import React from "react";

import { Outlet, useMatch, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Container from "../../components/Container";

import s from "./Layout.module.scss";

const Layout = () => {
  const match = useMatch({ path: "/" });
  const loginMatch = useMatch({ path: "/login" });
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "") {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } else {
      const element = document.querySelector(location.hash);
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className={s.layout}>
      {!loginMatch && <Header />}
      {match !== null ? (
        <Outlet />
      ) : (
        <div className={s.container}>
          <Container>
            <Outlet />
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
