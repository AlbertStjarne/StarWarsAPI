import React, { Component } from 'react';
import axios from 'axios';
import './Films.css';
import Characters from './Characters';
// import Spinner from './Spinner';

const API_URL = 'https://swapi.co/api/films/';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      peopleLinks: [],
      names: [],
      title: [],
      loading: false,
    };
    this.getFilms = this.getFilms.bind(this);
    this.getPeople = this.getPeople.bind(this);
    this.getNames = this.getNames.bind(this);
  }

  componentDidMount() {
    if (this.state.films.length === 0) {
      // this.setState({
      //   loading: true,
      // });
      this.getFilms();
    }
  }

  async getFilms() {
    let films = await axios.get(API_URL);
    this.setState({
      films: films.data.results,
      // loading: false,
    });
  }

  async getPeople(filmId) {
    let filmCharacters = await axios.get(`${API_URL}${filmId}/`);
    this.setState({
      peopleLinks: filmCharacters.data.characters,
      title: filmCharacters.data.title,
    });
    this.getNames(this.state.peopleLinks);
  }

  async getNames() {
    // this.setState({
    //   loading: true,
    // });
    let names = [];
    for (let i = 0; i < this.state.peopleLinks.length; i++) {
      let res = await axios.get(this.state.peopleLinks[i]);
      names.push(res.data.name);
    }
    this.setState({
      names: names,
      // loading: false,
    });
  }

  render() {
    const filmTitle = this.state.films
      .sort((filmA, filmB) => {
        return new Date(filmA.release_date) - new Date(filmB.release_date);
      })
      .map((film, i) => (
        <button
          key={i}
          className='Films-grid-item'
          onClick={() => this.getPeople(i + 1)}
        >
          <div className='Films-grid-item-title'>{film.title}</div>
          <div className='Films-grid-item-release-date'>
            {film.release_date}
          </div>
        </button>
      ));

    // if (this.state.loading) {
    //   return <Spinner />;
    // } else {
    return (
      <>
        <div className='Films-grid-container'>{filmTitle}</div>
        <Characters names={this.state.names} title={this.state.title} />
      </>
    );
    // }
  }
}

export default Films;
