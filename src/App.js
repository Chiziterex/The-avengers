import React from "react";
import "./App.css";
import "./mobile.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import NoPage from "./components/nopage";


function App() {
  return ( 
    <>
      <Home />
      <News />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter> */}
