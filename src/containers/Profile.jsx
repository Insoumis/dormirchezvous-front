import { connect } from 'react-redux';

import { updateProfile } from '../actions';
import { Profile as View } from '../components/Profile';

export const Profile = connect(
  ({ profile }) => profile,
  dispatch => ({
    update(values) {
      return dispatch(updateProfile(values));
    },
  }),
)(View);
