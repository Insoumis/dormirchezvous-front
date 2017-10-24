import React from 'react';

import { connect } from 'react-redux';

import { updateProfile } from '../actions';
import View from '../components/Profile';

const Profile = props => <View {...props} />;

export default connect(
  ({ profile }) => ({
    initialName: profile.name,
    initialContactInfo: profile.contactInfo,
    updating: profile.updating,
  }),
  dispatch => ({
    update(values) {
      dispatch(updateProfile(values));
    },
  }),
)(Profile);
