import { observer } from "mobx-react";
import React, { useContext } from "react";
import { useSpring, useScroll, animated} from "react-spring";
// import { motion, useScroll } from "framer-motion"

// import  '../assets/scss/test.css'
import { RootStoreContext } from "./store/rootStore";


// const X_LINES = 40

const PAGE_COUNT = 5

// const INITIAL_WIDTH = 20

const Skill = () => {

    const rootStore = useContext(RootStoreContext);

    const { isMobileMediaQuery, setIsMobileMediaQuery, setHeight, height } = rootStore.responsiveStore;

    
    // const draw = {
    //     hidden: { pathLength: 0, opacity: 0 },
    //     visible: (i: number) => {
    //       const delay = 1 + i * 0.5;
    //       return {
    //         pathLength: 1,
    //         opacity: 1,
    //         transition: {
    //           pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
    //           opacity: { delay, duration: 0.01 }
    //         }
    //       };
    //     }
    // };

    // const { scrollYProgress } = useScroll();


    const containerRef = React.useRef<HTMLDivElement>(null!)
    const barContainerRef = React.useRef<HTMLDivElement>(null!)
  
  
    const { scrollYProgress } = useScroll({
      container: containerRef,
    })

    return (
        <>
        {/* <div>CIAO</div> */}
        {/* <div className="logoFramer">
            <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
        fill="none"
        d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
        ></path>
        <path
        fill="none"
        d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
        ></path>
            </svg>
        </div>
        <motion.div
        className="titleframer"
        initial={{y: -250}}
        animate={{y: -10}}
        transition={{ delay: 0.2, type:"spring", stiffness:120}}
        >
            <h1>Pizza Joint</h1>
        </motion.div> */}

{/* <motion.div
        className="progresss-bar"
        style={{ scaleX: scrollYProgress }}
      />

        <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
          </motion.svg> */}


          <div ref={containerRef} className="skillBody">
      <div className='animated__layers'>
        {/* <animated.div ref={barContainerRef} className='bar__container'>
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className='bar'
              style={{
                // width: scrollYProgress.to(scrollP => {
                //   const percentilePosition = (i + 1) / X_LINES

                //   return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                // }),
                width:10,
                // opacity:scrollYProgress,
                 height:scrollYProgress.to(scrollP => {
                       const percentilePosition = (i + 1) / X_LINES
    
                       return ( scrollP) * Math.PI *10
                })
              }}
            />
          ))}
        </animated.div> */}
        <animated.div ref={barContainerRef} className='bar__container'>
            <animated.div
              className='bar'
              style={{
                // width: scrollYProgress.to(scrollP => {
                //   const percentilePosition = (i + 1) / X_LINES

                //   return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                // }),
                width:10,
                // opacity:scrollYProgress,
                 height:scrollYProgress.to(scrollP => {
                       return ( (scrollP) * height)
                })
                // height:scrollYProgress
              }}
            />

        </animated.div>


      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className='full__page' key={index} />
      ))}
    </div>

        </>
    )
}
export default observer(Skill);