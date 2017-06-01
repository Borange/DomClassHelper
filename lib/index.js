'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _addClass = function _addClass(element, names) {
    var classNames = [];
    var namesArray = names.split(' ');
    if (element.className.length > 0) {
        classNames = element.className.split(' ');
        for (var i = -1; ++i < classNames.length;) {
            for (var j = -1; ++j < namesArray.length;) {
                if (classNames[i] === namesArray[j]) {
                    namesArray.splice(j, 1);
                    j--;
                }
            }
        }
    }

    element.className = classNames.concat(namesArray).join(' ');

    return element.className;
};

var _removeClass = function _removeClass(element, names) {
    var classNames = element.className.split(' ');
    if (classNames.length === 0) return element.className;

    var namesArray = names.split(' ');
    var removeIndex = -1;

    for (var i = -1; ++i < classNames.length;) {
        for (var j = -1; ++j < namesArray.length;) {
            if (classNames[i] === namesArray[j]) {
                removeIndex = i;
                break;
            }
        }
        if (removeIndex > -1) {
            classNames.splice(i, 1);
            removeIndex = -1;
            i--;
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
    var currentArray = Array.from(element.getElementsByClassName(className));
    if (!currentArray.length) currentArray = Array.from(element.parentNode.getElementsByClassName(className));
    return currentArray;
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

exports.default = domClassHelper;
