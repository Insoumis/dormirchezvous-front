export const logIn = () => dispatch => {
  // TODO(buzugu): actually log in
  setTimeout(() => {
    dispatch({
      type: 'LOG_IN',
      payload: {
        name: 'LoremWoman',
        contactInfo: 'lorem@ipsum.com',
      },
    });
  });
};

export const updateProfile = ({ name, contactInfo }) => dispatch => {
  // TODO(buzugu): actually update profile
  dispatch({
    type: 'UPDATING_PROFILE',
  });

  setTimeout(() => {
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: {
        name,
        contactInfo,
      },
    });
  }, 300);
};

export const logOut = () => ({
  type: 'LOG_OUT',
});

export const createAdvert = ({
  title,
  description,
  availableSpots,
}) => dispatch => {
  // TODO(buzugu): actually create advert
  setTimeout(() => {
    dispatch({
      type: 'UPDATE_ADVERT',
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
      type: 'UPDATE_ADVERT',
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
      type: 'DELETE_ADVERT',
    });
  }, 300);
};
