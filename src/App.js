import React from "react";
import "./App.css";
import "./mobile.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import FullNews from "./components/fullNews";
import Team from "./components/team";
import FullTeam from "./components/fullTeam";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NoPage from "./components/nopage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/fullNews" element={<FullNews />} />
          <Route path="/team" element={<Team />} />
          <Route path="/fullTeam" element={<FullTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// {/* <BrowserRouter>
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </BrowserRouter> */}
