import React from "react";

import SearchForm from "../../components/search-form/search-form";
import SearchResults from "../../components/search-results/serach-results";
import NominateList from "../../components/nominate-list/nominate-list";
import About from "../../components/about/about";
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import Header from "../../components/header/header";

import "./homepage.scss";

const Homepage = (props) => {
  const {isLoggedIn, onLogoutUserRequest} = props;
  return <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__inner homepage__inner--top">
          <Header />
          <h1 className="title title--h1">Movie Awards</h1>
          <p className="main-text">Find and save 5 your favourite films you feel should be up for nomination</p>
          {
            isLoggedIn ? <SearchForm /> : <Link to="/signup" className="homepage__link transition">Start here</Link>
          }
        </div>
      </div>
      <div className="homepage__inner">
      {
        isLoggedIn ? <div className="homepage__wrap">
        <div className="homepage__left">
            <SearchResults />
          </div>
          <div className="homepage__right">
            <NominateList />
          </div>
        </div> : <About />
      }
      </div>
    </div>
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  onLogoutUserRequest: () => {
    dispatch(onLogoutRequest());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
