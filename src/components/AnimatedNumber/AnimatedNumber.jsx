import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { duration: 1000 }, // Настройте продолжительность анимации
  });

  return <animated.span>{number.to((num) => Math.floor(num))}</animated.span>;
};

export default AnimatedNumber;
