import React from "react";
import { stats } from "../../Data";
import "./Stats.css";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
const Stats = () => {
  return (
    <>
      {stats.map((stat) => (
        <div className="stats__box " key={stat.id}>
          <h3 className="stats__num">
            <AnimatedNumber value={stat.num} />+
          </h3>
          <p className="stats__title">{stat.title}</p>
        </div>
      ))}
    </>
  );
};

export default Stats;
