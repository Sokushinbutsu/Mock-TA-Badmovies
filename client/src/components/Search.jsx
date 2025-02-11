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
          genres: genres.data.genres
        });
      })
      .catch(err => {
        console.error(err);
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
        <form onSubmit={this.props.handleFormSubmit}>
          <select
            value={this.props.selected}
            onChange={this.props.handleFormChange}
          >
            {this.state.genres.map(genre => (
              <option key={genre.name} value={genre.id}>
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
