'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import _ from 'lodash';

import Droppable from './Droppable';

class Squash extends React.Component {
  state = {
    dragging: false,
    assets: [],
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
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    this.setState({ dragging: true });
  }

  handleDragLeave = () => {
    this.setState({ dragging: false });
  }

  handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    _.map(event.dataTransfer.files, (file) => {
      if (file.type.match(/image\/svg/)) {
        // console.log(file.size);
        var reader = new FileReader();
        reader.onload = (event) => {
          this.setState({
            assets: this.state.assets.concat([event.target.result]),
          });
        };

        reader.readAsDataURL(file);
      } else {
        alert('Please Only Upload SVGs');
      }
    });
  }

  render() {
    return (
      <div is="page"
           onDrop={ this.handleDrop }
           onDragOver={ this.handleDragOver }
           onDragLeave={ this.handleDragLeave }
      >
        <Droppable dragging={ this.state.dragging } />
      </div>
    );
  }
};

export default ReactCSS(Squash);
