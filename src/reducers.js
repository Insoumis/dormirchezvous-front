import { combineReducers } from 'redux';
import { types } from './actions';

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return true;
    case types.LOG_OUT:
      return false;
    default:
      return state;
  }
};

const profile = (state = { name: '', contactInfo: '' }, action) => {
  switch (action.type) {
    case types.LOG_IN:
    case types.UPDATE_PROFILE:
      return action.payload;
    case types.LOG_OUT:
      return {
        name: '',
        contactInfo: '',
      };
    default:
      return state;
  }
};

const myAdvertDetail = (
  state = { title: '', availableSpots: 1, description: '' },
  action,
) => {
  switch (action.type) {
    case types.UPDATE_ADVERT:
      return action.payload;
    case types.DELETE_ADVERT:
      return {
        title: '',
        description: '',
      };
    default:
      return state;
  }
};

// TODO(buzugu): remove temp data
const myAdvertApplications = (
  state = [
    {
      id: 94,
      name: 'Ms. Ipsum',
      contactInfo: 'ipsum@lorem.com',
      message:
        'Gingerbread donut cupcake cake oat cake jujubes jelly beans powder fruitcake. Caramels macaroon jelly gummi bears.',
    },
  ],
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const myAdvert = combineReducers({
  detail: myAdvertDetail,
  applications: myAdvertApplications,
});

// TODO(buzugu): remove temp data
const adverts = (
  state = [
    {
      id: 0,
      title: 'Lorem',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam.',
    },
    {
      id: 1,
      title: 'Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam.',
    },
    {
      id: 2,
      title: 'Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam.',
    },
  ],
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

// TODO(buzugu): remove temp data
const subscriptions = (
  state = [
    {
      id: 4,
      title: 'Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, praesentium! Sequi quod eligendi dolore ipsam ullam ut perspiciatis optio veritatis eveniet autem blanditiis ex saepe, esse, quo maiores, est laboriosam.',
      message: 'Je peux lorem chez toi stp ?',
    },
  ],
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const app = combineReducers({
  loggedIn,
  profile,
  myAdvert,
  adverts,
  subscriptions,
});

export default app;
