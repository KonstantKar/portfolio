import React, { useEffect } from "react";
import "./Home.css";
import Profile from "../../assets/Me.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TypedText from "../../components/TypedText/TypedText";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Я Егор Петров.</span>
            <br />
            <span>
              <TypedText text={["Режиссёр!", "Оператор!", "Монтажёр!"]} />
            </span>
          </h1>
          <p className="home__description">
            {" "}
            Ну я люблю доту типо, ну еще в сталкрафте нубиков пострелять, такие
            дела вот.А ДАА! Тинкер = мой любимый герой!
          </p>
          <Link to="/about" className="button">
            Больше обо мне{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
