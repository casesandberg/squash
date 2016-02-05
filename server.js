'use strict';

require('babel-register');
const proc = require('child_process');
const socketEmitter = require('chokidar-socket-emitter');

const port = process.argv[2] || 8090;

socketEmitter({ port: port, path: './' });

proc.exec('electron .', (error) => { console.log(error); });
