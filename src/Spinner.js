import React, { Component } from 'react';
import spinner from './spinner.gif';

class Spinner extends Component {
  render() {
    return (
      <>
        <img
          src={spinner}
          alt='Loading...'
          style={{
            width: '50vw',
            margin: 'auto',
            display: 'block',
          }}
        />
      </>
    );
  }
}

export default Spinner;
