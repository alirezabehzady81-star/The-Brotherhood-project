// import React from 'react'

import CardBottom from "./Card";
import FavoritesContent from "./FavoritesContent";
import { HeaderContent } from "./HeaderContent";
import LearningContent from "./LearningContent";
import Services from "./services";
import TeacherContent from "./Teacher";


const Landing = () => {
  return (
  <div className="w-[1440px] h-[4893px] flex flex-col bg-[#F7F7F7] overflow-x-hidden ">
            <div  className=" w-screen h-30 ">   </div>
  <HeaderContent/>
<FavoritesContent/>.
<LearningContent/>
<TeacherContent/>
<Services/>
<CardBottom/>
  </div>);
};

export { Landing };
