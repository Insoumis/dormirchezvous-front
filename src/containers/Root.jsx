import { connect } from 'react-redux';

import { logOut } from '../actions';
import { Root as View } from '../components/Root';

export const Root = connect(
  ({ loggedIn, subscriptions, adverts }) => ({
    loggedIn,
    subscriptions,
    adverts,
  }),
  dispatch => ({
    logOut: () => dispatch(logOut()),
  }),
)(View);
