import React from 'react';

import { connect } from 'react-redux';

import { logOut } from '../actions';
import View from '../components/Root';

const Root = props => <View {...props} />;

export default connect(
  ({ loggedIn }) => ({ loggedIn }),
  dispatch => ({
    logOut() {
      dispatch(logOut());
    },
  }),
)(Root);
