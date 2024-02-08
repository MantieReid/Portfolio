import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  //finish this part later on.  Add where you currently work at. 
  return  (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mantie Reid II </span>
            from <span className="purple"> New York.</span>
            <br />
            I am currently employed as a technical support specialist at .....
            <br />
            I have completed a Bachelor of science at Mercy University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the Outdoors
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to build things and make a difference in the world"{" "}
          </p>
          <footer className="blockquote-footer">Mantie Reid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
