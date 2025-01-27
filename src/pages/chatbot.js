import React, { useState } from 'react';
import Header from "../components/header";
import './chatbot.css'; // Importing the new CSS file
import heroBg from "../images/hero-bg.jpg";
import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import o1 from "../images/o1.jpg";
import o2 from "../images/o2.jpg";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import f6 from "../images/f6.png";
import f7 from "../images/f7.png";
import f8 from "../images/f8.png";
import f9 from "../images/f9.png";
import aboutimg from "../images/about-img.png";
import favicon from "../images/favicon.png";

const Chatbot = () => {

  return (
    <>
    <body className="sub_page">
  <div className="hero_area">
    <div className="bg-box">
    <img src={heroBg} alt="" />
    </div>
    <Header />
  </div>
  <section className="book_section layout_padding">
    <div className="container">
    <div className="col-md-6 mx-auto">
      <div className="heading_container">
        <h2>Hello add your ingredients bellow!</h2>
      </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="form_container">
            <form action="">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Ingredients"
                />
              </div>
              <div className="btn_box">
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
    </body>
    </>
  );
};

export default Chatbot;
