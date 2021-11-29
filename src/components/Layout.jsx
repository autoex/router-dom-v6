import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Container, Row, Stack } from "react-bootstrap";
const Layout = () => {
  return (
    <>
      <header className="App-header">
        <Stack direction="horizontal" gap={3}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Stack>
      </header>
      <Container style={{paddingBottom: '1rem'}}>
        <Row>
          <Outlet />
        </Row>
      </Container>

      <footer className="footer">React-router-doom@v6</footer>
    </>
  );
};

export default Layout;
