import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import "./App.css";
import BlogItem from "./pages/BlogItem";
import Login from "./pages/Login";
import WithAuth from "./hoc/WithAuth";
import AuthProvider from "./hoc/AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/blog"
              element={
                <WithAuth>
                  <Blog />
                </WithAuth>
              }
            />
            <Route path="/blog/:id" element={<BlogItem />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
