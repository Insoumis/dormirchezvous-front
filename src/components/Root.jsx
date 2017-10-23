import React from 'react';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import './Root.scss';

const Root = () => (
  <div>
    <Helmet>
      <title>Viens dormir chez moi ...</title>
    </Helmet>

    Allez viens, on est bieeeen !
  </div>
);

export default Root;
