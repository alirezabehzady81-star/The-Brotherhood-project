import React from "react";
import title from "./img-abouat-Article-section/backgrond.png";
const ArticleSection = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "nowrap",
          justifyContent: "center",
          position: "relative",
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
          اخبار و مقالات{" "}
        </span>
        <span
          style={{ marginTop: "50px", position: "absolute", color: "#888" ,left:'615px'}}
        >
          خودت رو با خبر کن!
        </span>
      </div>

      <div>
        <img src={title} alt="" />
      </div>
    </div>
  );
};

export default ArticleSection;
