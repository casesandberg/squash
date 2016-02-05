'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

class Editor extends React.Component {
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
      <div is="editor">
        { this.props.assets.map((asset, i) => {
          return (
            <div key={ i }>
              <div is="asset">
                <div dangerouslySetInnerHTML={{ __html: asset.svg }} />
              </div>
              <div is="toolbar">
                { asset.name }
              </div>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default ReactCSS(Editor);
