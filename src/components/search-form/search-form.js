import React, {Component} from "react";
import PropTypes from "prop-types";

import { FaSearch } from "react-icons/fa";
import {connect} from "react-redux";
import {getMoviesByTitle} from "../../redux/movie/movie-reducer";

import "./search-form.scss";

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTitle: '',
      moviesList: {}
    }
  }

  render() {
    const {searchTitle} = this.state;
    const {getMoviesBySearchTitle} = this.props;
    return <form className="search-form" action="#" method="post" onSubmit = {(evt) => {
      evt.preventDefault();
      getMoviesBySearchTitle(searchTitle);
    }}>
      <div className="search-form__input-wrap">
        <label className="visually-hidden">Search movie</label>
        <input className="search-form__input" type="text" name="movie" placeholder="Movie title" onChange={(evt) => {
          const target = evt.target;
          const value = target.value;
          this.setState({
            searchTitle: value
          });
        }}/>
      </div>
      <button className="search-form__submit" type="submit"><FaSearch /></button>
    </form>
  }
}

SearchForm.propTypes = {
  getMoviesBySearchTitle: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  getMoviesBySearchTitle: (title) => {
    dispatch(getMoviesByTitle(title));
  }
})

export default connect(null, mapDispatchToProps)(SearchForm);
