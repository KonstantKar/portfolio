import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedText = ({ text }) => {
  useEffect(() => {
    // Элемент, в который будет вставлен текст
    const targetElement = document.getElementById("typed-element");

    // Опции для Typed.js
    const options = {
      strings: text.map((str) => str),
      typeSpeed: 50, // Скорость печати (миллисекунды)
      backSpeed: 25, // Скорость удаления (миллисекунды)
      loop: true, // Зациклить анимацию
    };

    // Создание экземпляра Typed.js
    const typed = new Typed(targetElement, options);

    // Убираем Typed.js при размонтировании компонента
    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typed-element"></span>;
};

export default TypedText;
