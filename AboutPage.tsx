import React from "react";
import Image from "../assets/images/11447268.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 className="heading">Welcome! Studify is here to help</h2>
      <div className="content-container">
        <div className="content">
          <p>
          Are you frustrated with balancing exam preparation while spending hours filling out university applications?
          Worry not! Focus on your studies, and let us handle the application process for you. With our app, you only
          need to enter your details once, and we’ll apply to your desired universities with a single tap. No more 
          repetitive form-filling or missing deadlines—just a smooth,
          stress-free admission process.
          Apply effortlessly and secure your future without distractions!
          </p>
        </div>
        <div className="image-container">
          <img src={Image} alt="Studify Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;