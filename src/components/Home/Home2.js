import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Early on, I fell for the code. It wasn't just fun, it was a creative outlet, empowering me to build and express like never before.
              <br />
              <br />I am familiar with the following programming languages. 
              <i>
                <b className="purple"> C++, C#, Python, Java, HTML/CSS, Javascript, and powershell. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple"> Technologies and products</b> and
                also in areas related to{" "}
                <b className="purple">
                  Automation. I love automating tasks to reduce the amount of time it takes to complete certain tasks. Automation is King.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">python</b> and
              <i>
                <b className="purple">
                  {" "}
                  other programming languages.
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> C#, C++, Javascript, and more.</b>
              </i>
            </p>
    
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            
          </Col>
          
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MantieReid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mantiereidii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
// Remove Links for Twiiter, instagram, only leave github and linkedin there. 