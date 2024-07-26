import React, { Suspense, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Education from "./pages/Education";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { CURRENT_TAB } from "./common/constants";

const App = () => {
  // return <Layout />;
  const loadUtilsScript = () => {
    let s = document.createElement("script");
    let el = document.getElementsByTagName("script")[0];
    s.defer = true;
    s.src = "/src/js/utils.js";
    el.parentNode.insertBefore(s, el);
  };

  useEffect(() => {
    loadUtilsScript();
    if (window !== undefined) {
      const getPath = sessionStorage.getItem(CURRENT_TAB) || "/";
      const origin = window.location.origin;
      const path = window.location.pathname;
      const url = origin + getPath;
      getPath !== path ? window.location.replace(url) : null;
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/service"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/education"
          element={
            <Layout>
              <Education />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        {/* <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default App;
