
import domClassHelper from './dom-class-helper';

describe('Dom helper remove and adding classes', () => {

    let div = null;

    beforeEach( () => {
        div = document.createElement('div');
        div.id = 'test-div';
        document.body.appendChild(div);
    });

    afterEach( () => {
        document.body.removeChild(div);
    });


    it('should add a class to an empty class element', () => {
        expect(domClassHelper.addClass(div, 'show')).toBe('show');
    });

    it('should not duplicate class if the class already exists', () => {
        div.className = "exist";
        expect(domClassHelper.addClass(div, 'exist')).toBe('exist');
    });

    it('should append class after already existing classes', () => {
        div.className = "exist";
        expect(domClassHelper.addClass(div, 'show')).toBe('exist show');
        expect(domClassHelper.addClass(div, 'true')).toBe('exist show true');
        expect(domClassHelper.addClass(div, 'exist')).toBe('exist show true');
    });

    it('removes already existing classes', () => {
        div.className = "to-removed";
        expect(domClassHelper.removeClass(div, 'to-removed')).toBe('');
    });

    it('removes only class that it should', () => {
        div.className = "to-removed yes box";
        expect(domClassHelper.removeClass(div, 'yes')).toBe('to-removed box');
        expect(domClassHelper.removeClass(div, 'box')).toBe('to-removed');
    });

    it('can add multiple classes', () => {
        expect(domClassHelper.addClass(div, 'one two')).toBe('one two');
    });

    it('does not remov anything if class is not found', () => {
        div.className = "to-removed yes box";
        expect(domClassHelper.removeClass(div, 'hello')).toBe('to-removed yes box');
    });

    it('returns false no class exist', () => {
        expect(domClassHelper.hasClass(div, 'my-class')).toBe(false);
    });

    it('returns true if the class exist', () => {
        div.className = 'lorem ipsum my-class';
        expect(domClassHelper.hasClass(div, 'my-class')).toBe(true);
    });

    it('returns an empty array if no class was found', () => {
        expect(domClassHelper.findClass(div, 'no-class-specified')).toEqual([]);
    });

    it('returns an array if class was found', () => {
        div.className = 'my-class';
        expect(domClassHelper.findClass(div, 'my-class').length).toEqual(1);
    });

    it('should be able to search with body', () => {
        div.className = 'my-class';
        expect(domClassHelper.findClass(document.body, 'my-class').length).toEqual(1);
    });

    it('should be able to search with document.documentElement', () => {
        div.className = 'my-class';
        expect(domClassHelper.findClass(document.documentElement, 'my-class').length).toEqual(1);
    });

    it('toogle class name if not exist', () => {
        expect(domClassHelper.toggleClass(div, 'added')).toBe('added');
    });

    it('toogle class name if not exist', () => {
        div.className = "only added";
        expect(domClassHelper.toggleClass(div, 'added')).toBe('only');
    });

    


});
