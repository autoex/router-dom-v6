import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Container, Row, Stack } from "react-bootstrap";
const Layout = () => {
  return (
    <>
      <header className='App-header'>
      <Stack direction="horizontal" gap={3}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        </Stack>
      </header>
      <Container>
        <Row>
          <Outlet />
        </Row>
        <Row>
         
          <footer>Footer</footer>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
