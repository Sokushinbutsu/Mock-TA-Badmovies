import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map(movie => (
          <li
            className="movie_item"
            data-title={movie.title}
            data-popularity={movie.popularity}
            data-release_date={movie.release_date}
            data-image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            onClick={this.props.handleMovieClick}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              onError={e => {
                e.target.onerror = null;
                e.target.src =
                  'https://i.pinimg.com/originals/5d/5e/69/5d5e69d8dc9b6196bfa183013d7de82a.jpg';
              }}
            />
            <div className="movie_description">
              <h2>{movie.title}</h2>
              <section className="movie_details">
                <div className="title">Year</div>
                <span className="year">{movie.release_date}</span>
                <div className="movie_rating">
                  <div className="title">Rating</div>
                  <span>{movie.popularity}</span>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
