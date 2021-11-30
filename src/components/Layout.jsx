import React from "react";
import { Container, Row, Stack } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
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
      <Container style={{padding: '1rem 0'}}>
        <Row>
          <Outlet />
        </Row>
      </Container>

      <footer className="footer">React-router-doom@v6</footer>
    </>
  );
};

export default Layout;
