import React from "react";

import SearchForm from "../../components/search-form/search-form";
import SearchResults from "../../components/search-results/serach-results";
import NominateList from "../../components/nominate-list/nominate-list";
import { Link } from 'react-router-dom';

import "./homepage.scss";

const Homepage = () => {
  return <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__inner homepage__inner--top">
          <h1 className="title title--h1">Movie Awards</h1>
          <p className="main-text">Find and save 5 your favourite films you feel should be up for nomination</p>
          <Link to="/signup" className="homepage__link transition">Start here</Link>
          <SearchForm />
        </div>
      </div>
      <div className="homepage__inner">
        <div className="homepage__left">
          <SearchResults />
        </div>
        <div className="homepage__right">
          <NominateList />
        </div>
      </div>
    </div>
}

export default Homepage;
