import React from "react";
import Header from "./header";
import News from "./news";
import Team from "./team";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="backdrop-color">
          <div className="content">
            <h3>the avengers</h3>
            <p>
              <i>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</i>
            </p>
            <div className="btn-container">
              <button className="signup">sign up</button>
              <button>report</button>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
