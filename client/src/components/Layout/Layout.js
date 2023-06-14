import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: `calc(100vh - 195px)`,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
