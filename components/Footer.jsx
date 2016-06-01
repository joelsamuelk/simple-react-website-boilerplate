'use-strict';

import React from 'react';

const footerObj = {
  image: './images/logo-transparent.png'
};

class Footer extends React.Component {
  render(){
    const styleSheet = {
      fontStyle: 'Arial',
      background: 'rgb(34, 34, 34)',
      left:'0px',
      right:'0px',
      width: '100%',
      padding:'1em',
      color:'#9d9d9d',
      marginTop:'5em'
    };
    const footerStyle = {
      textAlign: 'center'
    };
    return (
      <div style={styleSheet}>
        <footer style={footerStyle}>
          <img src={footerObj.image} style={{height: '100px'}}/>
        </footer>
      </div>
    );
  }
}

export default Footer;
