import React from "react";
import courseimg from "./All-imge-abouat-card/courses section.png";
import name from "./All-imge-abouat-card/Vector(1).png";
import hat from "./All-imge-abouat-card/academic hat.png";
import Setare from "./All-imge-abouat-card/stars-1.png";
import setare1 from "./All-imge-abouat-card/Frame.png";
import hours from "./All-imge-abouat-card/hours.png";
import icon from "./All-imge-abouat-card/🔹Icon-Color.png"
const Product_Card = () => {
  return (
    <div className="">
      <form action="SectionCard">
        <div className=" w-60 relative ">
          <img
            src={courseimg}
            alt=""
            style={{
              borderRadius: "10px",
              position: "absolute",
              zIndex: "5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              right: "25px",
              top: "-20px",
            }}
          />
        </div>
        <div
          style={{
            border: "1px solid red",
            width: "290px",
            height: "320px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              marginTop: "50%",
            }}
          ></div>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                bottom: "120px",
                right: "30px",
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "tahoma",
              }}
            >
              دوره پیشرفته دیزاین
            </span>

            <div
              style={{
                backgroundSize: "50px",
                position: "absolute",
                width: " 150px",
                top: "-100px",
                right: "10px",
              }}
            >
              <img src={name} alt="" />
              <span
                style={{
                  position: "absolute",
                  right: "20px",
                  fontSize: "10px",
                  top: "0px",
                  color: "#666",
                  fontFamily: "tahoma",
                  fontWeight: "600",
                }}
              >
                محمدرضا تقی زاده
              </span>
              <img
                src={hat}
                alt=""
                style={{ position: "absolute", left: "-100px", top: "1px" }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "-75px",
                  top: "0px",
                  fontSize: "12px",
                  color: "#888",
                  fontFamily: "tahoma",
                }}
              >
                50
              </span>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  fontSize: "10px",
                  position: "absolute",
                  left: "-25px",
                  top: "25px",
                  display: "flex",
                  flexFlow: "row",
                }}
              >
                <img src={setare1} alt="" />
                <img src={Setare} alt="" />
                <img src={Setare} alt="" />
                <img src={Setare} alt="" />
                <img src={Setare} alt="" />
              </div>
              <div style={{ position: "absolute", top: "30px" }}>
                <img src={hours} alt="" />
                <h2
                  style={{
                    position: "absolute",
                    top: "-3px",
                    right: "20px",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  7:55
                </h2>
              </div>
              <div
                style={{
                  borderTop: "1px solid #888",
                  width: "170%",
                  height: "20%",
                  position: "absolute",
                 top:'55px',
                  padding: "10px",
                }}
              ></div>

              <div style={{width:'25px',height:'25px',position:'absolute',top:'70px',right:'10px'}}>
                <img src={icon} alt="" />
              </div>
              <div style={{position:'absolute',top:'70px',left:'-110px',color:'green',fontWeight:'600',fontSize:'18px'}}>
                <h1>150,000,000 تومان</h1>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product_Card;
