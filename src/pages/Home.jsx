import React, { useEffect, useState } from "react";
import LoadingPage from "./Loading";
import Landing from "./Landing";
import { gsap } from "gsap";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(".loading-screen", { display: "none" });
        },
      });
    }
  }, [loading]);

  return (
    <div className="bg-background overflow-hidden">
    
      <LoadingPage />
     
      {!loading && <Landing />}
    </div>
  );
}

export default Home;
