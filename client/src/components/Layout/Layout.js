import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <main
        style={{
          minHeight: `calc(100vh - 195px)`,
        }}
      >
        <Toaster />

        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App -Shop Now",
  description: "Mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Niloy",
};

export default Layout;
