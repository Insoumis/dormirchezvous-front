import { connect } from 'react-redux';

import { MySubscriptions as View } from '../components/MySubscriptions';

export const MySubscriptions = connect(({ subscriptions }) => ({
  subscriptions,
}))(View);
