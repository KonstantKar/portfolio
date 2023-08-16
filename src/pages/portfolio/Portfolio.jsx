import React from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { portfolio } from "../../Data";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <main className="portfolio section ">
      <h3 className="section__title">
        <span>Портфолио</span>
      </h3>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <>
            <PortfolioItem key={item.id} {...item} />
          </>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
