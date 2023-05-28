import data from "@/data/data";
import FrontSection from "@/components/FrontSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      {splash ? (
        <>
        
        </>
      ) : (
        <>
          <FrontSection />
        </>
      )}
    </>
  );
}
