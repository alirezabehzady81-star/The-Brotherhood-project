import React from "react";
import Product_Card from "./Product_Card";
//  import back from "../cursoe-section/All-imge-abouat-card/backgrond.png"

const Curses = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "nowrap",
          justifyContent: "center",
        }}
      >
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
        <a
          href="name"
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
          }}
        >
          دوره های اموزشی{" "}
        </a>
      </div>

      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: 800,
          color: "gray",
          fontSize: "22px",
          marginTop: "16px",
          fontFamily: "sans-serif",
        }}
      >
        به روز ترین دوره هایی که میتونید پیدا کنید
      </span>
      {/* <h1 style={{left:'60px' ,position:'absolute',fontFamily:'sans-serif ',fontWeight:'600' ,marginTop:'10px',color:'#888'}}>"همه دوره ها "</h1> */}
      <div className="relative flex flex-row justify-center top-20 gap-10 ">
        <Product_Card />
        <Product_Card />
        <Product_Card />
        <Product_Card />
      </div>
    </div>
  );
};

export default Curses;
