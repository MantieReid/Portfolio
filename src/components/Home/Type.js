import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Technical Support Specialist",
          "Open Source Contributor",
        ],
        autoStart: true, // start 
        loop: true, //loop through it
        deleteSpeed: 50, // how fast it should get rid of it. 
      }}
    />
  );
}

export default Type;
