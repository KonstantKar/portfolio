import React from "react";
import "./PortfolioItem.css";
import { useNavigate } from "react-router-dom";

const PortfolioItem = (props) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/portfolio/${props.id}`);
  };

  return (
    <>
      <div className="portfolio__item">
        <img src={props.img} alt="" className="portfolio__img" />
        <div className="portfolio__hover" onClick={handleItemClick}>
          <h3 className="portfolio__title">{props.title}</h3>
        </div>
      </div>
      <h1 className="portfolio__description">{props.details[0].desc}</h1>
    </>
  );
};

export default PortfolioItem;
