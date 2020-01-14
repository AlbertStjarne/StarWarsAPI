import React, { Component } from 'react';
import './Characters.css';

class Characters extends Component {
  handleClick() {}

  render() {
    const characters = this.props.names.map((name, i) => (
      <div className='Characters-grid-item' key={i}>
        {name}
      </div>
    ));

    if (this.props.names.length === 0) {
      return null;
    } else {
      return (
        <div className='Characters'>
          <h2 className='Characters-title'>{this.props.title}</h2>
          <h3 className='Characters-heading'>Characters</h3>
          <div className='Characters-grid-container'>
            <button
              className='Characters-button-close'
              onClick={this.handleClick}
            >
              Close
            </button>
            {characters}
          </div>
        </div>
      );
    }
  }
}

export default Characters;
