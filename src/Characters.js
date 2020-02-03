import React, { Component } from 'react';
import Modal from 'react-modal';
import Spinner from './Spinner';
import axios from 'axios';
import './Characters.css';

const API_URL = 'https://swapi.co/api/films/';

const customStyles = {
  content: {
    top: '5%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    backgroundColor: '#ecf0f1',
  },
};

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      peopleLinks: [],
      names: [],
      loading: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onOpenModalClick = this.onOpenModalClick.bind(this);
    this.getNames = this.getNames.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  onOpenModalClick() {
    this.getPeople(this.props.episode);
    this.openModal();
  }

  // Fetching data - links to characters
  async getPeople(filmId) {
    this.setState({ loading: true });
    let filmCharacters = await axios.get(`${API_URL}${filmId}/`);
    this.setState({
      peopleLinks: filmCharacters.data.characters,
      title: filmCharacters.data.title,
    });
    this.getNames(this.state.peopleLinks);
  }

  // Fetching data - character names
  async getNames() {
    let fetchedNames = [];

    // fetching one time for each character
    for (let i = 0; i < this.state.peopleLinks.length; i++) {
      let res = await axios.get(this.state.peopleLinks[i]);
      fetchedNames.push(res.data.name);
    }
    // only saving to state if all names have been fetched
    fetchedNames.length === this.state.peopleLinks.length
      ? this.setState({
          names: fetchedNames,
          loading: false,
        })
      : this.setState({
          names: [],
          loading: false,
        });
  }

  // Modal methods
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, peopleLinks: [], names: [] });
  }

  render() {
    return (
      <>
        <div>
          <button className='Films-grid-item' onClick={this.onOpenModalClick}>
            <div className='Films-grid-item-title'>{this.props.title}</div>
            <div className='Films-grid-item-release-date'>
              {this.props.releaseDate}
            </div>
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <h2 className='Characters-title'>{this.props.title}</h2>
            <h3 className='Characters-heading'>Characters</h3>
            <div className='Characters-grid-container'>
              <button
                className='Characters-button-close'
                onClick={this.closeModal}
              >
                close
              </button>

              {this.state.names.map((name, i) => {
                return (
                  <div className='Characters-grid-item' key={i}>
                    {name}
                  </div>
                );
              })}
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default Characters;
