import React from 'react';

import { connect } from 'react-redux';

import { createAdvert, updateAdvert, deleteAdvert } from '../actions';
import View from '../components/MyAdvert';

const MyAdvert = props => <View {...props} />;

export default connect(
  ({ myAdvert }) => myAdvert,
  dispatch => ({
    createAdvert(advert) {
      dispatch(createAdvert(advert));
    },
    updateAdvert(advert) {
      dispatch(updateAdvert(advert));
    },
    deleteAdvert() {
      dispatch(deleteAdvert());
    },
  }),
)(MyAdvert);
