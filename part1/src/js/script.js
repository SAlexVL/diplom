// require('es6-promise').polyfill();
// require('nodelist-foreach-polyfill');
// require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {

  "use strict";
  let calc = require('./parts/calc.js'),
      form = require('./parts/form.js'),
      image = require('./parts/image.js'),
      tabs = require('./parts/tabs.js'),
      timer = require('./parts/timer.js'),
      modal = require('./parts/modal.js');

  calc();
  form();
  image();
  tabs();
  timer();
  modal();
  
});