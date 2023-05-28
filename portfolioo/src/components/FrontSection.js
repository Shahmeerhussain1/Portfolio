import data from "@/data/data";
import { useState , useEffect } from "react";
const FrontSection = () => {
  console.log(
    "data",
    data.THEME.toLocaleLowerCase() == "black" ||
      data.THEME.toLocaleLowerCase() == "white"
      ? `${data.THEME}-theme`
      : "black-theme"
  );




  
  return (
    <>
      <div
        id={
          data.THEME &&
          (data.THEME.toLocaleLowerCase() == "black" ||
            data.THEME.toLocaleLowerCase() == "white")
            ? `${data.THEME}-theme-frontPage`
            : "black-theme-frontPage"
        }
      >
        <div className="frontMain">
          <div className="backgroundHeadingfront">
            <p>
            {data.BACKGROUND_HEADING ? data.BACKGROUND_HEADING : 'MERN STACK'}
            </p>
          </div>


          <div className="frontPagethreenameMain">
            <div className="mainGreeting">Hi, i am</div>
            <div className="mainName">{data.NAME ? data.NAME : "Shahmeer"}</div>
            <div className="mainRole">{`a ${data.ROLE ? data.ROLE : "a developer"}`}</div>
          </div>
         
          
        </div>
      </div>
    </>
  );
};
export default FrontSection;
