import React, { useEffect, useState } from "react";
import "./Home.css";
import Profile from "../../assets/Me.jpg";
import LittleProfile from "../../assets/LittleScreenMe.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import TypedText from "../../components/TypedText/TypedText";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем обработчик события при монтировании компонента
    window.addEventListener("resize", handleResize);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc = windowWidth > 1024 ? Profile : LittleProfile;

  return (
    <section className="home section grid">
      <img src={imageSrc} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Я Егор Петров.</span>
            <br />
            <span>
              <TypedText text={["Режиссёр.", "Оператор.", "Монтажёр."]} />
            </span>
          </h1>
          <p className="home__description">
            {" "}
            Ну я люблю доту типо, ну еще в сталкрафте нубиков пострелять, такие
            дела вот.А ДАА! Тинкер = мой любимый герой!
          </p>
          <Link to="/about" className="button home__button">
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
