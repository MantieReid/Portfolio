import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import calprogram from "../../Assets/Projects/Cal.gif";
import WeightConProgram from "../../Assets/Projects/WeightConGif.gif";
import Rockpaperscissorsprogram from "../../Assets/Projects/Rockpaperscissors.gif";
import onehundreddaysofcodeprogram from "../../Assets/Projects/100daysofcodeGif.gif";
import onehundreddaysofcoderound2 from "../../Assets/Projects/100daysround2.gif";
import WordGuessingprogram from "../../Assets/Projects/WordGuessingGame.gif";
import ChatApplicationprogramGif from "../../Assets/Projects/ChatApplicationgif.gif";
import KeyLoggerProgram from "../../Assets/Projects/KeyLoggerThing.gif";


//fix this. Add your Projects and remove the other ones. Post your Own here. 
function Projects() {
  return (
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my projects that I have created and worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calprogram}
              isBlog={false}
              title="Calculator"
              description="A calculator that was made using java. It does basic math. Math such as division, subtraction and addition."
              ghLink="https://github.com/MantieReid/calculator"
              demoLink="https://github.com/MantieReid/calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeightConProgram}
              isBlog={false}
              title="Weight Converter"
              description="A weight converter that was made using Javascript and Bootstrap. Converts weight into other forms of weight"
              ghLink="https://github.com/MantieReid/Weight-Converter"
              demoLink="https://codepen.io/mantiereid/full/mZVoqo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rockpaperscissorsprogram}
              isBlog={false}
              title="Rock paper Scissors"
              description="A small game of rock paper scissors I made using C#"
              ghLink="https://mantiereidii.com/portfolio/rock-paper-scissors"
              demoLink="https://github.com/MantieReid/Rock-paper-scissors/releases"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onehundreddaysofcodeprogram}
              isBlog={false}
              title="100 Days Of Code challenge"
              description="I completed the 100 days of coding challenge. Which is to code for one hour for the next 100 days. During this timeframe I made several programs. Programs such as a chat program, weight converter, word guessing game and more."
              ghLink="https://github.com/MantieReid/100-days-of-code"
              demoLink="https://github.com/MantieReid/100-days-of-code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onehundreddaysofcoderound2}
              isBlog={false}
              title="100 Days of code challenge round 2"
              description="Second round of 100 days of code. I completed over 100 leetcode probelms during this round."
              ghLink="https://github.com/MantieReid/100-days-of-code-round-2"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordGuessingprogram}
              isBlog={false}
              title="Word Guessing Game"
              description="A Word Guessing Game, I made using C++"
              ghLink="https://github.com/MantieReid/word-guessing-game"
              demoLink="https://github.com/MantieReid/word-guessing-game/releases/tag/1.0.3"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatApplicationprogramGif}
              isBlog={false}
              title="Chat Application"
              description="A chat application I made using C#"
              ghLink="https://github.com/MantieReid/Chat-application"
              
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KeyLoggerProgram}
              isBlog={false}
              title="Key Logger"
              description="A key logger that was made using Python. This  helps me to understand how hackers make them."
              ghLink="https://github.com/MantieReid/keylogger"
              
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
