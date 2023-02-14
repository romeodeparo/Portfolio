import React, { useCallback, useContext } from "react";
import { Col, Row } from 'react-bootstrap';
import { animated, useSpring } from "react-spring";

import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mailWhite.png'
import logo from '../../assets/img/Logo2.png';
import { Container, Engine, IParallax, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles-config";
import Particles from 'react-particles';
import { observer } from "mobx-react";
import { RootStoreContext } from "../store/rootStore";

interface IParams {

}

const MobileHome: React.FC<IParams> = () => {
  const rootStore = useContext(RootStoreContext);
  const { isToggled, SetIsToggled } = rootStore.mobileStore;

  const { x } = useSpring({
    x: isToggled ? 0 : 100
  })

  const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;
  const { page, setPage } = rootStore.mobileStore

  const changePage = (page: string) => {
    setPage(page)
    SetIsToggled(!isToggled)
  }

  return (
    <>
      {/* <div className="mobileNavbar">
        <a className="mobileNavbarLink">Home</a>
        <a className="mobileNavbarLink">Contattti</a>
      </div> */}
      <animated.div className="nav-wrapper" style={{ transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`) }}>
        <nav>

          <a onClick={() => changePage("home")}>Home</a>
          <a onClick={() => changePage("aboutMe")}>About Me</a>
          <a onClick={() => changePage("contact")}>Contact</a>
          <a className="mobileLogoContainer">
            <img src={logo} alt="" className='mobileLogo' />
          </a>
        </nav>
      </animated.div>
    </>
  )
}
export default observer(MobileHome);