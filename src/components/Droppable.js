'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

class Droppable extends React.Component {
  classes() {
    return {
      'default': {
        droppable: {
          Absolute: '0 0 0 0',
          margin: '30px',
          border: '2px dashed #ddd',
          borderRadius: '8px',
          fill: '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      'dragging': {
        droppable: {
          fill: '#4A90E2',
          border: '2px dashed #4A90E2',
        },
      },
    };
  }

  render() {
    return (
      <div is="droppable">
        {this.props.dragging}
        <svg style={{ width:'24px', height:'24px' }} viewBox="0 0 24 24">
          <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
        </svg>
      </div>
    );
  }
}

export default ReactCSS(Droppable);
