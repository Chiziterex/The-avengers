import React from "react";
import Header from "./header";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="backdrop-color">
          <Header />

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
    </>
  );
};

export default Home;
