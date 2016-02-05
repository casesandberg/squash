'use strict';

require('babel-register');
const proc = require('child_process');
const socketEmitter = require('chokidar-socket-emitter');

const port = process.argv[2] || 8090;

socketEmitter({ app: port });

proc.exec('electron .', (error) => { console.log(error); });
