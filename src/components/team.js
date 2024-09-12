import React from "react";
import Spiderman from "../assets/spiderman.jpg";

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="backdrop-color">
          <div className="content">
            <h3>
              meet the <span>team</span>
            </h3>

            <div className="box-container">
              <div className="box">
                <img src={Spiderman} alt=""></img>
                <div className="member-info">
                  <h4>Thor</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={Spiderman} alt=""></img>
                <div className="member-info">
                  <h4>Spiderman</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={Spiderman} alt=""></img>
                <div className="member-info">
                  <h4>Black Widow</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={Spiderman} alt=""></img>
                <div className="member-info">
                  <h4>Hawk Eye</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={Spiderman} alt=""></img>
                <div className="member-info">
                  <h4>Iron man</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
