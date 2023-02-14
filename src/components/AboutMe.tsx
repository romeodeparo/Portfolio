import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";
import { RootStoreContext } from "./store/rootStore";


const AboutMe = () => {
  const rootStore = useContext(RootStoreContext);

  const { isMobileMediaQuery, setIsMobileMediaQuery } =rootStore.responsiveStore;


    return (
        <>
        <div className="container">
          <Row className=''>
            <Col className="col-0 col-md-6 descriptionContainer">
            <p className={(isMobileMediaQuery ? "paragraphTitleMobile textColorBlue" : "paragraphCustomTitle ") + " textColorBlue "}>About Me</p>
              <p className={(isMobileMediaQuery ? "paragraphCustomMobile textColorBlue" : "paragraphCustom ") + " textColorWhite "}>I'm a front-end web developer located in Italy with 4 year of experience.<br /> I create high performance & rich interactive websites that work across all platforms & devices.</p>
              <hr></hr>
              <p className={(isMobileMediaQuery ? "paragraphCustomMobile textColorBlue" : "paragraphCustom ") + " textColorWhite "}>Well-organised person, problem solver, indipendent employee with high attention to detail.
              </p>
              <hr></hr>
              <p className={(isMobileMediaQuery ? "paragraphCustomMobile textColorBlue" : "paragraphCustom ") + " textColorWhite "}>Interested in the entire frontend spectrum and working on ambitius projects with positive people.
                I always keep myself updated, I follow online courses, read articles and always experience new things.</p>
            </Col>
          </Row>
        </div>
        </>
    )
}
export default observer(AboutMe);