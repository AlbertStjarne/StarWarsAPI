import React, { Component } from 'react';
import Characters from './Characters';
import Spinner from './Spinner';
import axios from 'axios';
import './Films.css';

const API_URL = 'https://swapi.co/api/films/';

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      loading: false,
    };

    this.getFilms = this.getFilms.bind(this);
  }

  componentDidMount() {
    this.getFilms();
  }

  //Fetching data - films
  async getFilms() {
    this.setState({ loading: true });
    let films = await axios.get(API_URL);
    this.setState({
      films: films.data.results,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className='Films-grid-container'>
        {this.state.films
          .sort((filmA, filmB) => {
            return new Date(filmA.release_date) - new Date(filmB.release_date);
          })
          .map((film, id) => {
            return (
              <Characters
                key={id}
                title={film.title}
                episode={film.episode_id}
                releaseDate={film.release_date}
              />
            );
          })}
      </div>
    );
  }
}

export default Films;
