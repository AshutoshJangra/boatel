import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../App.css";

class Headers extends React.Component {


  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/rentals");
  };

  renderAuthButtons = () => {
    const { isAuth } = this.props.auth;

    if (isAuth) {
      return (
        <button className="bg-white bn f5 dark-gray pointer" onClick={this.handleLogout}>
          Logout
        </button>
      );
    }

    return (
      <React.Fragment >
        <Link className="f5 no-underline pa2  dark-gray" to="/login">
          Login <span className="sr-only">(current)</span>
        </Link>
        <Link className="f5 pa2 no-underline dark-gray" to="/register">
          Register
        </Link>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <nav className="flex nav-bar justify-between bg-white ">
          <Link
            to="/rentals"
            className="logo pt2 pl5 no-underline fw4 orange"
            id="title"
          >
            Boatel
          </Link>
          <div className="search pa2">
            <input
              className="input-field "
              type="text"
              placeholder="Try 'Delhi' "
            />
            <button className="w4 h2 ma1 bg-orange near-white bn" type="search">
              Search
            </button>
          </div>

          <div className="links pa2 mt2 mr3 ">
          {this.renderAuthButtons()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default withRouter(connect(mapStateToProps)(Headers));