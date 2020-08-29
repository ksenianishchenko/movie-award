import React from "react";
import PropTypes from "prop-types";

import { FaTrophy } from "react-icons/fa";
import { connect } from "react-redux";
import { updateNominateList } from "../../redux/movie/movie-actions";

import "./movie-card.scss";

const MovieCard = (props) => {
  const {movie, key, nominateList, updateMoviesList} = props;

  return <div className="result-item" key={`index-${key}`}>
    <div className="result-item__poster">
      <img className="result-item__img" src={movie.Poster} width="200" height="260" alt={`poster for ${movie.Title}`}/>
    </div>
    <div className="result-item__movie-info">
      <span className="result-item__movie-title">{movie.Title}</span>
      <span className="result-item__movie-year">{` (${movie.Year})`}</span>
    </div>
    {
      nominateList.length === 5 ? '' : <div>
      {
        movie.is_nominate ? <p>Already in nominates</p> : <button className="result-item__btn" type="button" onClick={() => {
        updateMoviesList(movie);
      }}><FaTrophy /> nominate</button>}
      </div>
    }


  </div>
}

MovieCard.propTypes = {
  key: PropTypes.number,
  updateMoviesList: PropTypes.func,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string,
    Poster: PropTypes.string.isRequired
  }),
  nominateList: PropTypes.arrayOf(
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
  nominateList: state.movie.nominateList
})

const mapDispatchToProps = (dispatch) => ({
  updateMoviesList: (movie) => {
    dispatch(updateNominateList(movie));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);