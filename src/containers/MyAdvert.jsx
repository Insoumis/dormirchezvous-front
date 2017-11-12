import { connect } from 'react-redux';

import { createAdvert, updateAdvert, deleteAdvert } from '../actions';
import { MyAdvert as View } from '../components/MyAdvert';

export const MyAdvert = connect(
  ({ myAdvert }) => ({
    ...myAdvert.detail,
    applications: myAdvert.applications,
  }),
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
)(View);
