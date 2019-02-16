import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions';
import '../../App.css';

class Login extends React.Component {

  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(userData) {
    this.props.dispatch(actions.login(userData));
  }

  render() {
    const { isAuth, errors } = this.props.auth;
    const { successRegister } = this.props.location.state || false;

    if (isAuth) {
      return <Redirect to={{pathname: '/rentals'}} />
    }

    return (
      <section id="login ">
        <div className="">
          <div className="flex ">
            <div className="fl  w-50 pa5 pl6 pt5 center">
              <h1 className="f2 fw2">Login</h1>
              {
                successRegister &&
                  <div className=''>
                    <p className=""> You have been succesfuly registered, please login now. </p>
                  </div>
              }
              <LoginForm submitCb={this.loginUser} errors={errors}/>
            </div>
            <div className="">
              <div className="image-container ">
                <h2 className="f1 fw5 centered">Hundreds of awesome places in reach of few clicks.</h2>
                <img src={process.env.PUBLIC_URL + '/img/login-image.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(Login)