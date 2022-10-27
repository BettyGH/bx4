import React from "react";
import "../Style/home.css";

function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <div className="container">
        <p>
          {" "}
          ENGINEERING <br /> & <br /> TECHNOLOGY
        </p>
      </div>
    </div>
  );
}

export default Home;
