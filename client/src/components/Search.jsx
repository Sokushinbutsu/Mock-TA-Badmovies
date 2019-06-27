import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios
      .get('/movies/genres')
      .then(genres => {
        this.setState({
          genres: genres.data
        });
      })
      .catch(err => {
        alert('Error: Cannot fetch genres');
      });
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        <form onSubmit={this.props.handleSubmit}>
          <select
            value={this.props.selected}
            onChange={this.props.handleGenreChange}
          >
            {this.state.genres.map(genre => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;
