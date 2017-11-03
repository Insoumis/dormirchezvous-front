import React from 'react';

import { connect } from 'react-redux';

import { updateProfile } from '../actions';
import View from '../components/Profile';

const Profile = props => <View {...props} />;

export default connect(
  ({ profile }) => profile,
  dispatch => ({
    update(values) {
      return dispatch(updateProfile(values));
    },
  }),
)(Profile);
