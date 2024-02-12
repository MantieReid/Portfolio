import React from "react";
import { Col, Row } from "react-bootstrap";


//import { DiDocker } from "react-icons/di";
import { FaDocker } from "react-icons/fa6";


import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows10,
  SiWindows11,
  SiGithub,
  SiIntellijidea,
  SiVisualstudio,
  SiPycharm

  

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        < SiWindows10/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <FaDocker/>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPycharm/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea/>
      </Col>
    </Row>
  );
}

export default Toolstack;
