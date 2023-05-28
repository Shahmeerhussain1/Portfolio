import data from "@/data/data";
import { useState , useEffect } from "react";
const Splash = () => {
  return (
    <>
      <div
        id={
          data.THEME &&
          (data.THEME.toLocaleLowerCase() == "black" ||
            data.THEME.toLocaleLowerCase() == "white")
            ? `${data.THEME}-theme-splash`
            : "black-theme-splash"
        }
      >
     
      </div>
    </>
  );
};
export default FrontSection;
