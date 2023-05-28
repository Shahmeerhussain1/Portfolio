import data from "@/data/data";
import FrontSection from "@/components/FrontSection";
import { useEffect, useState } from "react";
import Splash from "@/components/Splash";
export default function Home() {
const [splash, setSplash] = useState(true);

useEffect(()=>{
  setTimeout(()=>{
    setSplash(false)
  },3000)
},[])


  return (
    <>
      {splash ? (
        <>
        <Splash/>
        
        </>
      ) : (
        <>
          <FrontSection />
        </>
      )}
    </>
  );
}
