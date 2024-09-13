import React from "react";
import { Link } from "react-router-dom";
import Webbed from "../assets/webbed.png"
import RustedHelmet from "../assets/rusted.png"
import BlackWidow from "../assets/black_widow.png"

const News = () => {
  return (
    <>
      <section className="news">
        <div className="backdrop-color">
          <div className="content">
            <span id="line"></span>
            <h3>news flash</h3>

            <div className="box-container">
              <div className="box">
              <img src={Webbed} alt="spiderman"></img>
                <div className="box-info">
                  <h4>
                  The criminals at the Bank of America just got webbed
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.....<span>see more</span>
                  </p>
                  <div className="tinyinfo">
                    <p>Mark John</p>
                    <p></p>
                    <p>30 mins ago</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={RustedHelmet} alt="iron man's rusted helmet"></img>
                <div className="box-info">
                  <h4>Viral photo of iron man's rusted helmet</h4>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.....<span>see more</span>
                  </p>
                  <div className="tinyinfo">
                    <p>John Doe</p>
                    <p>14 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={BlackWidow} alt="black widow's save"></img>
                <div className="box-info">
                  <h4>Girls abducted in New York. Black Widow saves the day</h4>
                  <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit.....<span>see more</span>
                  </p>
                  <div className="tinyinfo">
                    <p>Sanchez Obi</p>
                    <p>11/09/24</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/fullNews">
            <p className="btn">See more</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
