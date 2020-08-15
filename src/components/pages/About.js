import React from "react";

function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
        <h1>About</h1>
        <p>This is the BrainStorming App. V1.0.0</p>
        <br/>
        <p>This is a React Application</p>
      </div>
    </React.Fragment>
  );
}

const aboutStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  textAlign: 'center'
};

export default About;
