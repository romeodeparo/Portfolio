import React, { useCallback, useContext, useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";

import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mailWhite.png'
import arrow from '../../assets/img/arrowDown.gif';
import { Container, Engine, IParallax, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles-config";
import Particles from 'react-particles';
import { observer } from "mobx-react";
import { RootStoreContext } from "../store/rootStore";
import Typewriter from 'typewriter-effect';

const MobileHome = () => {
  const rootStore = useContext(RootStoreContext);

  const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    document.body.classList.add("noScroll")

    return () => {
      document.body.classList.remove("noScroll")
    }
  },)

  return (
    <>
      <Particles loaded={particlesLoaded} options={particlesOptions as ISourceOptions} init={particlesInit} id="tsparticles" />
      <div className="homeText">
        <div className='customTitleMobile'>
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
      </div>
      <div className="homeTextBottom text-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(3500).typeString("Click here to discover my skill")
              .start();
          }}
          options={{
            delay: 75,
            cursor: ""
          }}
        ></Typewriter>
        <br />
        <img className="arrowMobile" src={arrow}></img>
      </div>
    </>
  )
}
export default observer(MobileHome);