/* import packages */
import React from 'react';

/* import constant */
import { cms } from '../../../cms/constant';

const ContentNotFound = () => {
  return (
    <div className="container">
      <div className="no-content">
        <h1 className="no-data">{ cms.noContentFound }</h1>
      </div>
    </div>
  );
};

export default ContentNotFound;
