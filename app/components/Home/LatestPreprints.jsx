import React from 'react';

import PreprintList from './PreprintList';

const styles = {
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
};

const LatestPreprints = ({ preprints }) => (
  <div>
    <div style={ styles.title }>Latest Preprints</div>
    <PreprintList preprints={ preprints } />
  </div>
);

export default LatestPreprints;
