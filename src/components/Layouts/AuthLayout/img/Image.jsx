import React from "react";
import favoriteImage from "./Favorite.png";
import shopping from "./shopping card icon.png";
// import { useState } from "react";
 
const Image = () => {
  // const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-row items-center gap-2" dir="ltr">
      <img
        src={shopping}
        alt="shopping"
        style={{
          width: "30px",
          height: "30px",
          objectFit: "contain",
        }}
      />

      <img
        src={favoriteImage}
        alt="favoriteImage"
        style={{
          width: "30px",
          height: "30px",
          objectFit: "contain",
        }}
      />
      
    </div>
  );
};

export default Image;
