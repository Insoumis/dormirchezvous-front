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
