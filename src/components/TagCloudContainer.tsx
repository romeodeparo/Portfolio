import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSpring } from "react-spring";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { RootStoreContext } from "./store/rootStore";
import { observer } from "mobx-react";

interface IParams {

}
const TagCloudContainer: React.FC<IParams> = ({ }) => {
  const rootStore = useContext(RootStoreContext);


  const [tagCloudWidth, setTagCloudWidth] = useState(0)
  const { isMobileMediaQuery } = rootStore.responsiveStore;


  useEffect(() => {
    if(isMobileMediaQuery){
      setTagCloudWidth((document.body.clientWidth)/1.2)
    }
    else{ 
      setTagCloudWidth((document.body.clientWidth - 200) / 2.5)
    }

  }, [document.body.clientWidth])

  return (
    <>
      <div className='container'>

        <Row>
          <Col className='col-0 col-md-6'></Col>
          <Col className='col-12 col-md-6'>
            <TagCloud
              options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(tagCloudWidth, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "normal",
              })}
              style={{}}
            // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            // onClickOptions={{ passive: true }}
            >
              {[
                "VSCode",
                "TypeScript",
                "React.js",
                "React Native",
                "Angular",
                "Javascript",
                "HTML",
                "CSS",
                "SASS",
                "GIT",
                "Solidity",
                "Bootstrap",
                "Jira",
                "NPM",
                "JSON",
                "Node JS",
                "SQL",
                "ES5/ES6"

              ]}
            </TagCloud>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default observer(TagCloudContainer);