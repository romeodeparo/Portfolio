import React, { useCallback, useContext } from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";

import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mailWhite.png'
import logo from '../assets/img/Logo2.png';
import { Container, Engine, IParallax, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles-config";
import Particles from 'react-particles';
import { observer } from "mobx-react";
import { RootStoreContext } from "../store/rootStore";
import AboutMe from "../AboutMe";
import TagCloudContainer from "../TagCloudContainer";


const MobileHome = () => {
    const rootStore = useContext(RootStoreContext);

    const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;



    return (
        <>
            <AboutMe/> 
            <TagCloudContainer/>
        </>
    )
}
export default observer(MobileHome);