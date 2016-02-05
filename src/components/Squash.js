'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Droppable from './Droppable';

class Squash extends React.Component {
  state = {
    dragging: false,
  }

  classes() {
    return {
      'default': {
        page: {
          Absolute: '0 0 0 0',
        },
      },
    };
  }

  handleDragOver = (event) => {
    event.dataTransfer.dropEffect = 'copy';
    this.setState({ dragging: true });
  }

  handleDragLeave = () => {
    this.setState({ dragging: false });
  }

  render() {
    return (
      <div is="page" onDragOver={ this.handleDragOver } onDragLeave={ this.handleDragLeave }>
        <Droppable dragging={ this.state.dragging } />
      </div>
    );
  }
};

export default ReactCSS(Squash);
