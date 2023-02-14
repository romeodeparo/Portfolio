import React, { useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";
import Move from "./Move";
import linkedin from '../assets/img/linkedin.png'
import mail from '../assets/img/mail.png'
import { observer } from "mobx-react";


const ContactInfo = () => {

  useEffect(() => {
    if (document.body.clientWidth > 768) {
      console.log(document.body.clientWidth)
    }
    else {
      console.log(document.body.clientWidth)
    }

  }, [document.body.clientWidth])

  return (
    <>
      <div className="connectContainer">
        <h1 className='customText'>Let's Connect!
        </h1>
        <h3 className='customSubtext'>You can find me easily on Linkedin or just send me a mail!</h3>

        <a target="_blank" href="https://www.linkedin.com/in/romeodeparo/">
          <Move scale={1.5} springConfig={{ mass: 2, tension: 100, friction: 20 }}>
            <img src={linkedin} alt="" className='contactIcon' />
          </Move>
        </a>

        <a href="mailto:romeodeparo@yahoo.it">
          <Move scale={1.5} rotation={90}
            timing={200}
            springConfig={{ tension: 200, friction: 7 }}>
            <img src={mail} alt="" className='contactIcon' />
          </Move>
        </a>
      </div>
    </>
  )
}
export default observer(ContactInfo);