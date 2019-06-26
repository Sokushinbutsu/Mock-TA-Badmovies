import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
      genres: [],
      selected: ''
    };

    // you might have to do something important here!
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  componentDidMount() {}

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    axios
      .get(`/movies/search/${this.state.selected}`)
      .then(movies => {
        this.setState({
          movies: movies.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  saveMovie() {
    // same as above but do something diff
    axios.post('/movies/save').then();
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  handleFormChange(event) {
    this.setState({ selected: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.getMovies();
  }

  handleMovieClick(event) {
    console.log(event.currentTarget.dataset);
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            selected={this.state.selected}
            handleFormChange={this.handleFormChange}
            handleFormSubmit={this.handleFormSubmit}
          />

          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            handleMovieClick={this.handleMovieClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
