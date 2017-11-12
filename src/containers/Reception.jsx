import { connect } from 'react-redux';

import { logIn } from '../actions';
import { Reception as View } from '../components/Reception';

export const Reception = connect(null, dispatch => ({
  logIn: () => dispatch(logIn()),
}))(View);
