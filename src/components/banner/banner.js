import React, {useState, useEffect} from "react";

import { FaTrophy } from "react-icons/fa";

import "./banner.scss";

const Banner = () => {
  const [isVisible, setIsVisible] = useState('open');

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <div className={`banner ${isVisible}`} >
      <div className="banner__inner">
        <FaTrophy />
        <h3 className="title title--h3">Thank you for your choise</h3>
        <button type="button" className="banner__btn" onClick={() => {
          setIsVisible('');
        }}>Close</button>
      </div>
    </div>
}

export default Banner;
