import React from 'react';

import { connect } from 'react-redux';

import { logIn } from '../actions';
import View from '../components/Reception';

const Reception = props => <View {...props} />;

export default connect(null, dispatch => ({
  logIn() {
    dispatch(logIn());
  },
}))(Reception);
