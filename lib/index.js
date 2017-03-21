'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _addClass = function _addClass(element, name) {
    var classNames = [];
    if (element.className.length > 0) {
        classNames = element.className.split(' ');
        for (var i = -1; ++i < classNames.length;) {
            if (classNames[i] === name) return element.className;
        }
    }
    classNames.push(name);
    element.className = classNames.join(' ');
    return element.className;
};

var _removeClass = function _removeClass(element, name) {
    var classNames = element.className.split(' ');
    if (classNames.length === 0) return element.className;
    for (var i = -1; ++i < classNames.length;) {
        if (classNames[i] === name) {
            classNames.splice(i, 1);
        }
    }
    element.className = classNames.join(' ');
    return element.className;
};

var _hasClass = function _hasClass(element, name) {
    var classNames = element.className.split(' ');
    if (classNames.length === 0) return false;

    for (var i = -1; ++i < classNames.length;) {
        if (classNames[i] === name) return true;
    }

    return false;
};

var _toggleClass = function _toggleClass(element, name) {
    if (_hasClass(element, name) === true) return _removeClass(element, name);
    return _addClass(element, name);
};

var _findClass = function _findClass(element, className) {
    return Array.from(element.parentNode.getElementsByClassName(className));
};

var domClassHelper = {

    addClass: function addClass(element, name) {
        return _addClass(element, name);
    },

    removeClass: function removeClass(element, name) {
        return _removeClass(element, name);
    },

    hasClass: function hasClass(element, name) {
        return _hasClass(element, name);
    },

    findClass: function findClass(element, className) {
        return _findClass(element, className);
    },

    toggleClass: function toggleClass(element, className) {
        return _toggleClass(element, className);
    }

};

exports.domClassHelper = domClassHelper;