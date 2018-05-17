import React from 'react';

import Preprint from './Preprint';

const PreprintList = ({ preprints }) => (
  <div>
    { preprints.map((preprint, index) => (
      <Preprint key={ index } preprint={ preprint } />
    )) }
  </div>
);

export default PreprintList;
