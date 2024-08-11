/* eslint-disable jsx-a11y/anchor-is-valid */
// Portfolio.js
import React from "react";
import cv from '../../assets/images/cv.jpg';
import './contact.css';

function Contact() {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="mapbox" data-mapbox="">
      <figure className="scrollable-image-container">
          <img src={cv} alt="cv" loading="lazy" />
        </figure>
      </section>
      <a
            className="form-btn px-auto"
            target="_blank"
            href="https://drive.google.com/file/d/1rSoESe6HpLYw72FLu6UEr6cY9J0FZZqy/view?usp=sharing" rel="noreferrer"
          >
            <ion-icon name="paper-plane" />
            <span>Download CV</span>
          </a>
    </article>
  );
}

export default Contact;
