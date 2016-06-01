'use-strict';

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const heroObj = {
  title: 'Basic React Boilerplate',
  subtitle: 'Single page React / React-Bootstrap mashup, without jQuery :)'
};

class Hero extends React.Component {
  render() {

    const styleSheet = {
      background:'transparent',
      color:'white',
      border: '2px solid white'
    };

    return (
      <Jumbotron style={styleSheet}>
        <h1>{heroObj.title}</h1>
        <h2>{heroObj.subtitle}</h2>
      </Jumbotron>
    );
  }
}

export default Hero;
