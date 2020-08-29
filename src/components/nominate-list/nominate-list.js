import React from "react";
import PropTypes from "prop-types";

import { FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import {removeFromNominateList} from "../../redux/movie/movie-actions";
import { FaTrophy } from "react-icons/fa";
import Banner from "../banner/banner";

import "./nominate-list.scss";

const NominateList = (props) => {
  const {nominateList, removeMovieFromNominates} = props;

  return <div className="nominate-list">
    <div className="nominate-list__header">
      <FaTrophy />
      <span className="nominate-list__count">{nominateList.length}</span>
      <h2 className="title title--h2">Your nominates</h2>
    </div>
    <div className="nominate-list__wrap">
      {nominateList.length ? nominateList.map((movie, index) => {
        return <div className="nominate-list__item" key={`index-${index}`}>
          <div className="nominate-list__poster">
            <img className="nominate-list__img" src={movie.Poster} width="30" height="60" alt={`poster for ${movie.Title}`}/>
          </div>
          <div className="nominate-list__movie-info">
            <span className="nominate-list__movie-title">{movie.Title}</span>
            <span className="nominate-list__movie-year">{movie.Year}</span>
          </div>
          <button className="nominate-list__btn" type="button" onClick={() => {
            removeMovieFromNominates(movie);
          }}><FaTrashAlt /></button>
        </div>
        }) : <p className="nominate-list__text">Your list of nominates is empty</p>
      }
    </div>
    {
      nominateList.length === 5 ? <Banner /> : ''
    }
  </div>
}

NominateList.propTypes = {
  nominateList: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.string,
      Poster: PropTypes.string.isRequired
    })
  ),
  removeMovieFromNominates: PropTypes.func
}

const mapStateToProps = (state) => ({
  nominateList: state.movie.nominateList
})

const mapDispatchToProps = (dispatch) => ({
  removeMovieFromNominates: (movie) => {
    dispatch(removeFromNominateList(movie))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(NominateList);
