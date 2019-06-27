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
    axios.get('/movies/genres').then(genres => {
      console.log(genres);
      this.setState({
        genres: genres.data
      }).catch(err => {
        console.error(error);
      });
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

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        {/* <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option> */}
        <form onSubmit={this.props.handleSubmit}>
          <select
            value={this.props.selected}
            onChange={this.props.handleGenreChange}
          >
            {this.state.genres.map(genre => (
              <option value={genre.name} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </form>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
