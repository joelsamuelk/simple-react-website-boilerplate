'use-strict';

import React from 'react';
import Hero from './Hero.jsx';
import MathAction from './MathAction.jsx';

class Container extends React.Component {
  render(){
    const styleSheet = {
      height:'auto',
      paddingTop: '70px'
    };

    return (
      <div className='container-fluid' style={styleSheet}>
        <Hero />
        <MathAction />
      </div>
    );
  }
}

export default Container;
