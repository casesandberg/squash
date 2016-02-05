'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import EditorItem from './EditorItem';

class Editor extends React.Component {
  classes() {
    return {
      'default': {
        editor: {

        },
      },
    };
  }

  render() {
    return (
      <div is="editor">
        { this.props.assets.map((asset, i) => {
          return <EditorItem {...asset} key={ i } />;
        }) }
      </div>
    );
  }
}

export default ReactCSS(Editor);
