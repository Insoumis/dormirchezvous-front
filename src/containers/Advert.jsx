import { connect } from 'react-redux';

import { applyForAdvert } from '../actions';
import { Advert as View } from '../components/Advert';

export const Advert = connect(null, dispatch => ({
  applyForAdvert: id => dispatch(applyForAdvert(id)),
}))(View);
