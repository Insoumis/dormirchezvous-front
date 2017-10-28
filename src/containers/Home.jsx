import React from 'react';

import { connect } from 'react-redux';

import { logOut } from '../actions';
import View from '../components/Home';

const Home = props => <View {...props} />;

export default connect(
  ({ loggedIn, advert }) => ({
    loggedIn,
    advert,
  }),
  dispatch => ({
    logOut() {
      dispatch(logOut());
    },
  }),
)(Home);
