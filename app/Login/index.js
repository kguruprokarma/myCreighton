import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from './actions';
import _ from 'lodash';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from '../../lib';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{
          lat: 60,
          lng: 105
        }}
    onClick={props.onMapClick}
  >
      {props.markers.map(marker => (
      <Marker {...marker} key={marker.key} />
    ))}
  </GoogleMap>
));
const form = reduxForm({
  form: 'login'
});

class Login extends Component {

  getInitialState() {
    return { formData: '' };
  }

  handleChange(e) {
    this.setState({ formData: e.target.value });
  }

  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  pushItem(e) {
    e.preventDefault();
    firebase.database().ref().set({
      four: this.state.formData
    });
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
  constructor() {
    super();
    this.state = {
      markers: []
    };
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      const nextMarkers = [
        ...this.state.markers,
        {
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
        }
      ];
      this.setState({
        markers: nextMarkers
      });
    }, (reason) => {
      this.setState({
        center: {
          lat: 60,
          lng: 105
        },
        content: `Error: The Geolocation service failed (${reason}).`
      });
    });
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        },
        key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
      }
    ];
    this.setState({
      markers: nextMarkers
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className=''>
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
        <form >
          <div className='form-group'>
            <label htmlFor='netid'>Push Data</label>
            <Field name='FormData' onChange={this.handleChange.bind(this)} className='form-control' component='input' type='text' />
          </div>
          <button onClick={this.pushItem.bind(this)} className='btn btn-primary'>Push</button>
        </form>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '500px' }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
        />
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

