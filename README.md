# DomClassHelper

A small library for manipulating DOM element classes. Can be used to fetch, check, remove, add and toggle class names.

Install via npm:

     $ npm install dom-class-helper --save


### API:

* **addClass** requires a dom element and the class name. Returns true/false depending if the class was added.
* **removeClass** requires a dom element and the class name. Returns true/false depending if the class was removed.
* **hasClass** requires a dom element and the class name. Returns a boolean if it exist or not.
* **toogleClass** requires a dom element and the class name. Toogles the class name.
* **findClass** requires a dom element and a class name. Returns the elements as an array.

**Example of use**

```
// ES6

import DomClassHelper from 'dom-class-helper';

const elements = DomClassHelper.findClass(document.body, 'menu-items');

elements.forEach(element => {
  // Do something with the element.
  console.log(element);
});

```

```
// ES5, CommonJS

var DomClassHelper = require('dom-class-helper').default;

// Find elements by class name.
var elements = DomClassHelper.findClass(document.body, 'menu-items');

elements.forEach( function(element) {
  // Do something with the element.
  console.log(element);
});

```

