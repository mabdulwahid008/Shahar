// eslint-disable-next-line no-unused-vars
import React from "react";
import Continer from "./Continer";
import img from "../assets/images/logoo.png";
const Header = () => {
  return (
    <header className=" bg-primary pt-5 lg:-mb-24 z-10 relative">
      <Continer>
        <div>
          <div className="mr-3 pb-3 md:pb-0 md:mr-0">
            <a href="/">
              <img
                src={img}
                alt="logo2"
                className="w-[100px] md:w-[160px] lg:w-auto md:mx-0 mx-auto md:px-0 "
              />
            </a>
          </div>
        </div>
      </Continer>
    </header>
  );
};

export default Header;
