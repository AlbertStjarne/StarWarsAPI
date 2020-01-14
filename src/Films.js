import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://swapi.co/api/films/';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [] };
    this.getFilms = this.getFilms.bind(this);
  }

  componentDidMount() {
    if (this.state.films.length === 0) this.getFilms();
  }

  async getFilms() {
    let films = await axios.get(API_URL);
    this.setState({
      films: films.data.results,
    });
  }

  render() {
    const filmTitle = this.state.films
      .sort((filmA, filmB) => {
        return new Date(filmA.release_date) - new Date(filmB.release_date);
      })
      .map((film, i) => (
        <button key={i} className='Films-grid-item'>
          <div className='Films-grid-item-title'>{film.title}</div>
          <div className='Films-grid-item-release-date'>
            {film.release_date}
          </div>
        </button>
      ));

    return (
      <div>
        <h2>Films Component</h2>
        <div className='Films-grid-container'>{filmTitle}</div>
      </div>
    );
  }
}

export default Films;
