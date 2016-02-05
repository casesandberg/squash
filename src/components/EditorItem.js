'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
// import SVGO from 'svgo';
// const convertSVG = new SVGO();

class EditorItem extends React.Component {
  classes() {
    return {
      'default': {
        asset: {
          Absolute: '0 0 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        toolbar: {
          Absolute: 'null 0 0 0',
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div is="asset">
          <div dangerouslySetInnerHTML={{ __html: this.props.svg }} />
        </div>
        <div is="toolbar">
          <input defaultValue={ this.props.name } />
        </div>
      </div>
    );
  }
}

export default ReactCSS(EditorItem);
