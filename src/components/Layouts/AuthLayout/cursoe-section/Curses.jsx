import React from "react";
import Product_Card from "./Product_Card";
//  import back from "../cursoe-section/All-imge-abouat-card/backgrond.png"
 

const Curses = () => {
  return (
    <div className="   ">
     
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
            backgroundColor: "black",
            borderRadius: "100px",
            marginTop: "18px",
            marginLeft: "20px",
          }}
        ></div>
        <a
          href="name"
          style={{
            fontSize: "30px",
            fontFamily: "tahoma",
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
          marginTop: "15px",
        }}
      >

        به روز ترین دوره هایی که میتونید پیدا کنید
      </span>
       
      <div  className="flex flex-row justify-center gap-15 border " style={{marginTop:'70px'}} >
        
        <Product_Card />
        <Product_Card />
        <Product_Card />
        <Product_Card />
      </div>
    </div>
  );
};

export default Curses;
