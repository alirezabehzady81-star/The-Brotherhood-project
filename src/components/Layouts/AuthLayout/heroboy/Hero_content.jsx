import React from "react";
import hero from "./hero section(2).png";
const Hero_content = () => {
  return (
    <div>
      <img src={hero} alt="hero" style={{ position: "relative" }}  />
      <div>
        {/* this input for search in the hero and now ofline */}
        {/* <input
          type="text"
          placeholder="Search . . ." 
          style={{
            // border: "1px solid rgba(0, 239, 72, 0.814)",
            width: "420px",
            position: "absolute",
            top: "510px",
            zIndex: "5",
            right: "125px",
            borderRadius: "100px",
            height: "70px",
            paddingInline: "50px",
            backgroundColor: "white",
            fontFamily: "cursive",
            boxShadow: "0px  0px 20px 0.5px rgb(199, 199, 199,0.5)",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Hero_content;
