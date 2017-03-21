

const addClass = (element, name) => {
    let classNames = [];
    if(element.className.length > 0) {
        classNames = element.className.split(' ');
        for(let i = -1; ++i < classNames.length;) {
            if(classNames[i] === name) return element.className;
        }
    }
    classNames.push(name);
    element.className = classNames.join(' ');
    return element.className;
}

const removeClass = (element, name) => {
    let classNames = element.className.split(' ');
    if(classNames.length === 0) return element.className;
    for(let i = -1; ++i < classNames.length;) {
        if(classNames[i] === name) {
            classNames.splice(i, 1);
        }
    }
    element.className = classNames.join(' ');
    return element.className;
}

const hasClass = (element, name) => {
    let classNames = element.className.split(' ');
    if(classNames.length === 0) return false;

    for(let i = -1; ++i < classNames.length;) {
        if(classNames[i] === name) return true;
    }

    return false;
}

const toggleClass = (element, name) => {
    if(hasClass(element, name) === true) return removeClass(element, name);
    return addClass(element, name);
}


const findClass = (element, className) => {
    return Array.from(element.parentNode.getElementsByClassName(className));
};


const domClassHelper = {

    addClass: (element, name) => {
        return addClass(element, name);
    },

    removeClass: (element, name) => {
        return removeClass(element, name);
    },

    hasClass: (element, name) => {
        return hasClass(element, name);
    },

    findClass: (element, className) => {
        return findClass(element, className);
    },

    toggleClass: (element, className) => {
        return toggleClass(element, className);
    }

}

export default domClassHelper;