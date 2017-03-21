# DomClassHelper

A small library for manipulating DOM elements classes. 

API

* **addClass** requires a dom element and the class name. Returns true/false depending if the class was added.
* **removeClass** requires a dom element and the class name. Returns true/false depending if the class was removed.
* **hasClass** requires a dom element and the class name. Returns a boolean if it exist or not.
* **toogleClass** requires a dom element and the class name. Toogles the class name.
* **findClass** requires a dom element and a class name. Returns the elements as an array.

**Example of use**

```

// ES6

import domClassHelper from 'dom-class-helper';

domClassHelper.findClass(document.body, elements => {
    elements.forEach(element => {
        // Do something with the element.
        console.log(element);
    });
});


// ES5, CommonJS

var domClassHelper = require('dom-class-helper').default;

// Find elements by class name.
domClassHelper.findClass(document.body, 'menu-items', function(array){
    array.forEach( function(element) {
        // Do something with the element.
        console.log(element);
    });
});

```

