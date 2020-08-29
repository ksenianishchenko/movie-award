import React, {Component} from "react";

import { FaTrophy } from "react-icons/fa";

import "./banner.scss";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: 'open'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {isVisible} = this.state;
    return <div className={`banner ${isVisible}`} >
        <div className="banner__inner">
          <FaTrophy />
          <h3 className="title title--h3">Thank you for your choise</h3>
          <button type="button" className="banner__btn" onClick={() => {
            this.setState({
              isVisible: false
            })
          }}>Close</button>
        </div>
      </div>
  }
}

export default Banner;
