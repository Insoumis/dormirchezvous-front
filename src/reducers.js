import { combineReducers } from 'redux';

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};

const profile = (state = { name: '', contactInfo: '' }, action) => {
  switch (action.type) {
    case 'LOG_IN':
    case 'UPDATE_PROFILE':
      return action.payload;
    case 'UPDATING_PROFILE':
      return {
        ...state,
        updating: true,
      };
    case 'LOG_OUT':
      return {
        name: '',
        contactInfo: '',
      };
    default:
      return state;
  }
};

const advert = (
  state = { title: '', availableSpots: 1, description: '' },
  action,
) => {
  switch (action.type) {
    case 'UPDATE_ADVERT':
      return action.payload;
    case 'DELETE_ADVERT':
      return {
        title: '',
        description: '',
      };
    default:
      return state;
  }
};

const app = combineReducers({
  loggedIn,
  profile,
  advert,
});

export default app;
