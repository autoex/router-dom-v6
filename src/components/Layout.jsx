import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      <main>
          <Outlet />
      </main>
      <footer>
          Footer
      </footer>
    </>
  );
};

export default Layout;
