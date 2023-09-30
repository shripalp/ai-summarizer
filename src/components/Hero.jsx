//import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="w-full flex justify-between items-center flex-row mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://www.cnn.com")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1></h1>
    </header>
  );
};

export default Hero;
