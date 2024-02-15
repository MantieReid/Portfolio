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
            Hi everyone, I am <span className="purple">Mantie Reid II </span>
            from <span className="purple"> New York.</span>
            <br />
            I am currently employed as a Service desk analyst at Montefiore Medical center. 
            <br />
            I have completed a Bachelor of science at Mercy University.
            <br />
            I create programs for fun and to get better at coding in my spare time. 
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the Outdoors
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging out with freinds
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>

            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to build programs and make a difference in the world"{" "}
          </p>
          <footer className="blockquote-footer">Mantie Reid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
