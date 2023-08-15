import React from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { TfiVimeo } from "react-icons/tfi";
import "./CTA.css";
const CTA = () => {
  return (
    <>
      <div className="cta__net">
        <a href="https://vk.com/egorpetrov98" target="_blank">
          {" "}
          <SlSocialVkontakte />
        </a>
        <a href="">
          <CiInstagram />
        </a>
        <a href="">
          <TfiVimeo />
        </a>
      </div>
    </>
  );
};

export default CTA;
