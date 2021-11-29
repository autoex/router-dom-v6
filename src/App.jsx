import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import './App.css'
import BlogItem from "./pages/BlogItem";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogItem />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
