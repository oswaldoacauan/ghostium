'use strict';

var bonzo = require('bonzo');
var qwery = require('qwery');
var bean = require('bean');

function $(selector) {
  return bonzo(qwery(selector))
}

console.log($('div'));
