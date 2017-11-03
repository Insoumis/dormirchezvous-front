export const types = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  UPDATE_ADVERT: 'UPDATE_ADVERT',
  DELETE_ADVERT: 'DELETE_ADVERT',
  APPLY_FOR_ADVERT: 'APPLY_FOR_ADVERT',
};

export const logIn = () => dispatch => {
  // TODO(buzugu): actually log in
  setTimeout(() => {
    dispatch({
      type: types.LOG_IN,
      payload: {
        name: 'LoremWoman',
        contactInfo: 'lorem@ipsum.com',
      },
    });
  });
};

export const updateProfile = ({ name, contactInfo }) => dispatch =>
  new Promise(resolve => {
    // TODO(buzugu): actually update profile
    setTimeout(() => {
      dispatch({
        type: types.UPDATE_PROFILE,
        payload: {
          name,
          contactInfo,
        },
      });
      resolve();
    }, 1000);
  });

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const createAdvert = ({
  title,
  description,
  availableSpots,
}) => dispatch => {
  // TODO(buzugu): actually create advert
  setTimeout(() => {
    dispatch({
      type: types.UPDATE_ADVERT,
      payload: {
        title,
        description,
        availableSpots,
        spotsLeft: availableSpots,
      },
    });
  }, 300);
};

export const updateAdvert = ({
  title,
  description,
  availableSpots,
}) => dispatch => {
  // TODO(buzugu): actually update advert
  setTimeout(() => {
    dispatch({
      type: types.UPDATE_ADVERT,
      payload: {
        title,
        description,
        availableSpots,
        spotsLeft: availableSpots,
      },
    });
  }, 300);
};

export const deleteAdvert = () => dispatch => {
  // TODO(buzugu): actually delete advert
  setTimeout(() => {
    dispatch({
      type: types.DELETE_ADVERT,
    });
  }, 300);
};

export const applyForAdvert = id => dispatch =>
  new Promise(resolve => {
    // TODO(buzugu): actually apply
    setTimeout(() => {
      // TODO(buzugu): write a reducer to handle this
      dispatch({
        type: types.APPLY_FOR_ADVERT,
        payload: { id },
      });
      resolve();
    }, 1000);
  });
