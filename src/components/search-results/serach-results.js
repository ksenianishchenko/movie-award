import React from "react";
import PropTypes from "prop-types";

import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";

import "./search-results.scss";

const SearchResults = (props) => {
  const {moviesList} = props;

  return <div className="search-results">
    <h2 className="title title--h2">Search results</h2>
    <div className="search-results__list">
      {moviesList.length ? moviesList.map((movie, index) => {
        return <MovieCard movie={movie} key={index}/>
      }) : <p className="search-results__text">No results yet</p>
      }
    </div>
  </div>
}

SearchResults.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.string,
      Poster: PropTypes.string.isRequired
    })
  )
}

const mapStateToProps = (state) => ({
  moviesList: state.movie.moviesList
})

export default connect(mapStateToProps, null)(SearchResults);
