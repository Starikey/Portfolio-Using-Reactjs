import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./component/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { Container } from "react-bootstrap";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </AnimatePresence>
      </Container>
    </>
  );
}

export default App;