import React from "react";
import "./About.css";
import Info from "../../components/Info/Info";
import Stats from "../../components/Stats/Stats";
import CTA from "../../components/CTA/CTA";

const About = () => {
  return (
    <>
      <h3 className="about__title">
        <span>Обо</span>
        <span>Мне</span>
      </h3>
      <main className="section container">
        <section className="about">
          <div className="about__container grid">
            <div className="about__info">
              <h3 className="section__subtitle">Персональная информация:</h3>
              <ul className="info__list grid">
                <Info />
              </ul>
            </div>
            <div className="stats grid">
              <Stats />
            </div>
          </div>
        </section>
      </main>
      <footer className="about__footer">
        <h3 className="footer__title">Egor Petrov</h3>
        <div className="footer__cta">
          <CTA />
        </div>
      </footer>
    </>
  );
};

export default About;
