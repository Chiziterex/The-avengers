import React from "react";
import { NewsData } from "./newsData";
import Footer from "./footer";

const FullNews = () => {
  return (
    <>
      <section className="news">
        <div className="backdrop-color">
          <div className="content">
            <span id="line"></span>
            <h3>news flash</h3>
            <div className="box-container">
              {NewsData.map((news) => (
                <div key={news.id} className="box">
                  <img src={news.img} alt={news.alt} />
                  <div className="box-info">
                    <h4>{news.h4}</h4>
                    <p>
                      {news.p} <span>see more</span>
                    </p>
                    <div className="tinyinfo">
                      <p>{news.name}</p>
                      <p>{news.time}</p>
                    </div>
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

export default FullNews;
