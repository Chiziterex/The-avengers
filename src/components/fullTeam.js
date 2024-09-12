import React from "react";
import { TeamData } from "./teamData";
import Footer from "./footer";

const FullTeam = () => {
  return (
    <>
      <section className="fullTeam team">
        <div className="backdrop-color">
          <div className="content ">
          <h3>
              meet the <span>team</span>
            </h3>
            <div className="box-container">
              {TeamData.map((member) => (
                <div key={member.id} className="box">
                      <img src={member.img} alt={member.name} />
                      <div className="member-info">
                      <h4>{member.name}</h4>
                      <p>{member.briefSummary}</p>
                      </div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </section>
          <Footer />
    </>
  );
};

export default FullTeam;
