require('./less/main.less');

require('./pug/index.pug');

import bar from './js/main.js';

bar();

// console.log(__dirname);

// function component () {
//   var element = document.createElement('div');
//
//   /* lodash is required for the next line to work */
//   element.innerHTML = _.join(['Hello','webpack'], ' ');
//
//   return element;
// }
//
// document.body.appendChild(component());
