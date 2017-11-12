import { connect } from 'react-redux';

import { Search as View } from '../components/Search';

export const Search = connect(({ subscriptions, adverts }) => ({
  subscriptions,
  adverts,
}))(View);
