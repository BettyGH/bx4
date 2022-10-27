import React from "react";
import "../Style/logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="container">
      <Link to="home">
        <div className="">
          <div className="disc">
            <h4>
              BX4
              <br />
              E&T
            </h4>
          </div>
        </div>
      </Link>
      <div>
        <h6>BX4 ENGINEERING & TECHNOLOGY LLC</h6>
      </div>
    </div>
  );
}

export default Logo;
