import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import { Responsive } from "tsparticles-engine";
import { RootStoreContext } from "./store/rootStore";

 const ResponsiveComponent = () => {
  const rootStore = useContext(RootStoreContext);
  const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;



  const handleMediaQueryChange = (matches: any) => {
    // matches will be true or false based on the value for the media query
    setIsMobileMediaQuery(isMobile);
  };

  const isMobile = useMediaQuery(
    { query: "(max-width: 500px), (max-height:500px)" },
    undefined,
    handleMediaQueryChange
  );


  useEffect(() => {
    setIsMobileMediaQuery(isMobile);
  }, [isMobile]);

  const handleResize = () => {
    // We execute the same script as before
    // let vhMeeting = document.documentElement.clientHeight -90;
    // let vhTree = document.documentElement.clientHeight-40;
    // let vhSearchResult = document.documentElement.clientHeight -(isMobileMediaQuery? 240 :270) ;
    // document.documentElement.style.setProperty("--heightMeeting", `${vhMeeting}px`);
    // document.documentElement.style.setProperty("--heightTree", `${vhTree}px`);
    // document.documentElement.style.setProperty("--heightSearchResult", `${vhSearchResult}px`);
    
    //toast.error(`EVENTO handleResize - vh : ${vh}`);
  };

 
  useEffect(() => {
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        // -90 perche ci seve il valore senza l altezza della mainNavbar e della YearNavbar
        // let vhMeeting = document.documentElement.clientHeight-90;
        // let vhTree = document.documentElement.clientHeight-40;
        // let vhSearchResult = document.documentElement.clientHeight -(isMobileMediaQuery? 240 :270);

        // // Then we set the value in the --vh custom property to the root of the document
        // document.documentElement.style.setProperty("--heightMeeting", `${vhMeeting}px`);
        // document.documentElement.style.setProperty("--heightTree", `${vhTree}px`);
        // document.documentElement.style.setProperty("--heightSearchResult", `${vhSearchResult}px`);

        // We listen to the resize event
        window.addEventListener("resize", handleResize);

    return () => {
    }
  })


  return <></>;

};

export default observer(ResponsiveComponent);