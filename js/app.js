'use strict';

var React = require('react');
var App = require('./components/App');

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);
