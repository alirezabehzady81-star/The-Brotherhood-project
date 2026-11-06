import React from "react";
import title from "./img-abouat-Article-section/backgrond.png";
import picture1 from "./img-abouat-Article-section/a&n item1.png"
import picture2 from "./img-abouat-Article-section/a&n item2.png"
import picture3 from "./img-abouat-Article-section/a&n item3.png"
import picture4 from "./img-abouat-Article-section/a&n item4.png"
import picture5 from "./img-abouat-Article-section/a&n item5.png"
import picture6 from "./img-abouat-Article-section/a&n item6.png"
const ArticleSection = () => {
  return (
    <div className=" h-170 flex flex-wrap justify-center relative">
      <div
        style={{
          display: "flex",
          flexFlow: "nowrap",
          justifyContent: "center",
          position: "relative",
          // border: "1px solid red",
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
          style={{
            marginTop: "50px",
            position: "absolute",
            color: "#888",
            
          }}
        >
          خودت رو با خبر کن!
        </span>
      </div>

      <div>
        <img src={title} alt="" />
      </div>
<div style={{display:'flex',flexFlow:'row wrap'  ,position:'absolute' ,top:'150px' ,width:'1300px',justifyContent:'center'}}>
    <img src={picture3} alt="" />
  <img src={picture1} alt="" />
<img src={picture2} alt="" />
 <img src={picture5} alt="" />
<img src={picture6} alt="" />

<img src={picture4} alt="" />

</div>
    </div>
  );
};

export default ArticleSection;
