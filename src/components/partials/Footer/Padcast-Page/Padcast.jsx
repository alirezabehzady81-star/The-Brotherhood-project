import React from "react";
import backrondTitle from "./img-abouat-padcast/backgrond.png";
import Ekhtyary from "./img-abouat-padcast/اختیاری.png";
import Box from  "./img-abouat-padcast/podcast box.png"
const Padcast = () => {
  return (
    <div className=" h-120 flex flex-wrap justify-center relative  mt-20">
      <div
        style={{
          // border: "2px solid red",
          width: "15px",
          height: "15px",
          backgroundColor: "#05e9f5",
          borderRadius: "100px",
          marginTop: "18px",
          marginLeft: "20px",
        }}
      ></div>
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: "30px",
          // fontFamily: "tahoma",
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
        }}
      >
        پادکست ها
      </span>
      <div>
        <img src={backrondTitle} alt="" />
      </div>
      <div>
        <img
          src={Ekhtyary}
          className="flex   h-20 w-30 absolute top-10 left-70 top-20"
        />
      </div>
      <div>
 <img src={Box} className="absolute  flex right-0 h-100 w-200 top-20 right-70" />
      </div>
    </div>
  );
};

export default Padcast;
