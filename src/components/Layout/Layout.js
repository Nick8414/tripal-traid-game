import React from "react";

import { Outlet, useMatch, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Container from "../../components/Container";

import s from "./Layout.module.scss";

const Layout = () => {
  const match = useMatch({ path: "/" });
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'auto',
  });
  }, [location.pathname]);

  return (
    <>
      <Header />
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
    </>
  );
};

export default Layout;
