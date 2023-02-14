import React from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";
import Move from "./Move";
import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mailWhite.png'
import logo from '../assets/img/Logo2.png';
import { IParallax } from "tsparticles-engine";

interface IParams {
    ref: React.MutableRefObject<IParallax>
}
const Sidebar: React.FC<IParams> = ({ ref }) => {



    return (
        <>
            {/* <div className='customHeader'>

                <img src={logo} alt="" className='logo' />
                <div className=' aHolder'>
                    <hr className='breakLink' />
                    <a className="customLink" onClick={() => ref.current.scrollTo(0)}>Home</a>
                    <hr className='breakLink' />
                    <a className="customLink" onClick={() => ref.current.scrollTo(0.8)}>About me</a>
                    <hr className='breakLink' />

                    <a className="customLink" onClick={() => ref.current.scrollTo(contactOffset - 0.3)}>Contact</a>
                    <hr className='breakLink' />

                </div>
            </div> */}
        </>
    )
}
export default Sidebar;