'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

class Squash extends React.Component {
  classes() {
    return {
      'default': {
        page: {
          padding: '20px',
        },
      },
    };
  }

  render() {
    return (
      <div is="page">
        Squash
      </div>
    );
  }
};

export default ReactCSS(Squash);
