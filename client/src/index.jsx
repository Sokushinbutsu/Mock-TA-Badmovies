import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
      selected: 878
    };

    // you might have to do something important here!
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    Axios.get(`/movies/search/${this.state.selected}`)
      .then(movies => {
        console.log(movies);
        this.setState({
          movies: movies.data
        });
      })
      .catch(err => {
        alert('An error occurred getting your movies');
      });
  }

  saveMovie(movie) {
    Axios.post('/movies/save', {
      movie: movie
    })
      .then(() => {
        this.setState({
          favorites: [...this.state.favorites, movie]
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteMovie(movie) {
    console.log(movie);
    Axios.delete('/movies/delete', {
      data: movie
    })
      .then(() => {
        this.setState(state => {
          const favorites = state.favorites.filter(
            fave => fave.title !== movie.title
          );

          return {
            favorites
          };
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  handleGenreChange(e) {
    this.setState({ selected: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getMovies();
  }

  handleMovieClick(e) {
    if (this.state.showFaves === false) {
      this.saveMovie(Object.assign({}, e.currentTarget.dataset));
    } else {
      this.deleteMovie(Object.assign({}, e.currentTarget.dataset));
    }
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
            handleGenreChange={this.handleGenreChange}
            handleSubmit={this.handleSubmit}
            selected={this.state.selected}
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
