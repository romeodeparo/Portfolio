import React, { useCallback, useContext, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";

import burgherIcon from '../../assets/img/burgherIcon.png'
import logo from '../assets/img/Logo2.png';
import { Container, Engine, IParallax, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles-config";
import Particles from 'react-particles';
import { observer } from "mobx-react";
import { RootStoreContext } from "../store/rootStore";
import MobileAboutMe from "./MobileAboutMe";
import MobileNavbar from "./mobileNavbar";
import MobileHome from "./MobileHome";
import MobileContact from "./mobileContact";


const MobileApp = () => {
    const rootStore = useContext(RootStoreContext);

    const { isMobileMediaQuery, setIsMobileMediaQuery } = rootStore.responsiveStore;
    const { page } = rootStore.mobileStore;
    const { isToggled, SetIsToggled } = rootStore.mobileStore;

    const renderSwitch = (page: string) => {
        switch (page) {
            case 'home':
                return <MobileHome />;
            case 'aboutMe':
                return <div className="mobileContainer"><MobileAboutMe /></div>;
            case 'contact':
                return <MobileContact />
            default:
                return <MobileHome></MobileHome>;
        }
    }

    const toggleHandler = () => {
        SetIsToggled(!isToggled)

    }
    return (
        <>

            <div className="burgherContainer">
                <button className="burgherMenu" onClick={toggleHandler}><img className="burgherIcon" src={burgherIcon}></img></button>
            </div>
            <MobileNavbar></MobileNavbar>
            <div className="mobileContainer">

                {renderSwitch(page)}
            </div>

        </>
    )
}
export default observer(MobileApp);