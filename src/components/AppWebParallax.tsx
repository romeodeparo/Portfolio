import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
// import logo from './logo.svg';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import logo from '../assets/img/Logo2.png';
import type { Engine, ISourceOptions, Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particles-config";
import Particles from 'react-particles';
import TagCloudContainer from './TagCloudContainer';
import AboutMe from './AboutMe';
import Contact from './ContactInfo';
import { RootStoreContext } from './store/rootStore';
import { observer } from 'mobx-react';
import ResponsiveComponent from './ResponsiveComponent';
import Typewriter from 'typewriter-effect';


function AppWebParallax() {

  // const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  // const ref = useRef<HTMLDivElement>(null);
  const [skillWidth, setSkillWidth] = useState(0)
  const [skillCloudOffset, setSkillCloudOffset] = useState(0)
  const [skillTextOffset, setSkillTTextOffset] = useState(0)
  const [contactOffset, setContactOffset] = useState(0)
  const [offset, setOffset] = useState(0)
  const [pages, setPages] = useState(3)

  const [test, setTest] = useState(false)

  const rootStore = useContext(RootStoreContext);

  const { isMobileMediaQuery, setIsMobileMediaQuery, setHeight } = rootStore.responsiveStore;


  useEffect(() => {
    if (document.body.clientWidth > 768) {
      setSkillWidth((document.body.clientWidth - 200) / 2.5)
      setSkillCloudOffset(1)
      setSkillTTextOffset(1)
      setContactOffset(2)
      setPages(5)
    }
    else {
      setSkillWidth((document.body.clientWidth) / 1)
      setSkillCloudOffset(1)
      setSkillTTextOffset(1.5)
      setContactOffset(3)
      setPages(5)

    }

  }, [document.body.clientWidth])



  const ref = useRef<IParallax>(null!)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);


  //serve se utilizziamo il classname con la logica per cambiare la classe dinamicamente
  const handleSidebarClick = (selectedOffset: number) => {
    ref.current.scrollTo(selectedOffset)
    if (ref.current) {
      setOffset(ref.current.offset)
    }
  }


  const sidebar = useRef<any>(null)
  useEffect(() => {
    if(sidebar.current){
      setHeight(sidebar?.current?.clientHeight)
    }
  })
  return (
    <>
      <div >
        {/* <ParticlesBackground></ParticlesBackground> */}
        {!isMobileMediaQuery &&
          <div className='customHeader' id="sidebar" ref={sidebar}>

            <img src={logo} alt="" className='logo' />
            <div className=' aHolder'>
              <hr className='breakLink' />
              {/* <a className={(ref?.current?.offset===0 ? "customLinkSelected" :"customLink") + ""} onClick={() => handleSidebarClick(0)}>Home</a> */}
              <a className="customLink" onClick={() => handleSidebarClick(0)}>Home</a>

              <hr className='breakLink' />
              {/* <a className="customLink">Project</a>
          <hr className='breakLink' /> */}
              <a className="customLink" onClick={() => handleSidebarClick(0.8)}>About me</a>
              <hr className='breakLink' />

              <a className="customLink" onClick={() => handleSidebarClick(contactOffset - 0.3)}>Contact</a>
              <hr className='breakLink' />
            </div>
          </div>
        }

        <Parallax pages={pages} ref={ref} className="parallaxCustom">

          {/* Effetto Sfondo Home */}
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1}
            style={{
            }}
          >
            <Particles loaded={particlesLoaded} options={particlesOptions as ISourceOptions} init={particlesInit} id="tsparticles" />
          </ParallaxLayer>

          {/* Scritte  Home */}
          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            factor={0.9}
            onClick={() => ref.current.scrollTo(0.8)}
            className={isMobileMediaQuery ? "" : "parallaxLayer"}
          >
            <div className='customTitle'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hi,<br />I'm Romeo,<br />frontend developer")
                    .start();
                }}
                options={{
                  delay: 75,
                  cursor: ""
                }}
              />
            </div>
            <br />
            <div className='customSubtitle textColorReact'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(3500).typeString("click on the screen, or scroll to discover my Skill")
                    .start();
                }}
                options={{
                  delay: 75,
                  cursor: ""
                }}
              />
            </div>
          </ParallaxLayer>


          {/* Testo AboutMe */}
          <ParallaxLayer
            offset={skillTextOffset}
            speed={0.005}
            factor={1}
            className={isMobileMediaQuery ? "" : "parallaxLayer"}
          >
            <AboutMe />
          </ParallaxLayer>

          {/* Effetto TagCloud */}
          <ParallaxLayer
            offset={skillCloudOffset}
            speed={0.005}
            factor={1}
            // style={{ textAlign: 'center' }}
            className={isMobileMediaQuery ? "" : "parallaxLayer"}
          >
            <TagCloudContainer></TagCloudContainer>
          </ParallaxLayer>


          {/* Contattami */}
          <ParallaxLayer
            offset={contactOffset}
            speed={0.05}
            factor={0.9}
            className={isMobileMediaQuery ? "" : "parallaxLayer" + "text-center"}>
            <Contact />
          </ParallaxLayer>

          {/* <ParallaxLayer
            offset={contactOffset}
            speed={0.05}
            factor={0.9}
            className={(isMobileMediaQuery ? "" : "parallaxLayer" )+ " text-center"}>
              <Skill></Skill>
          </ParallaxLayer> */}

          {/* <ParallaxLayer
          sticky={{ start: 0.5, end: 3 }}
        >
          <img src={cat} className="gifSticky"></img>
        </ParallaxLayer> */}

        </Parallax>
      </div>
    </>

  );
}

export default observer(AppWebParallax);
