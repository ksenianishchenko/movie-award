import React from "react";
import {connect} from "react-redux";
import {onLogoutRequest} from "../../redux/user/user-reducer";

import "./header.scss";

const Header = (props) => {
  const {isLoggedIn, onLogoutUserRequest} = props;
  return <div className="header">
    <div className="header__inner">
    {
      isLoggedIn ? <button className="header__logout transition" type="button" onClick={() => {
        onLogoutUserRequest();
      }}>Logout</button> : ''
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
