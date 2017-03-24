import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from './actions';
import { translateText } from '../common/translate';
import { browserTitle } from '../common/utility';

const form = reduxForm({
  form: 'login'
});

class Login extends Component {  

  componentWillMount() {   
    browserTitle(translateText('common:SIGN_IN'));
  }

  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='col-sm-6 col-sm-offset-3'>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <div className='form-group'>
            <label htmlFor='netid'>NetID</label>
            <Field name='email' className='form-control' component='input' type='text' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field name='password' className='form-control' component='input' type='password' />
          </div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
