import { classNames } from "./classNames";

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    }) 

    test('test', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2', ])).toBe(expected);
    }) 

    test('test', () => {
        const expected = 'someClass class1 class2 hovered scrolled';
        expect(classNames('someClass', {hovered: true, scrolled: true}, ['class1', 'class2', ])).toBe(expected);
    }) 

    test('test', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {hovered: true, scrolled: false}, ['class1', 'class2', ])).toBe(expected);
    }) 

    test('test', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {hovered: true, scrolled: undefined}, ['class1', 'class2', ])).toBe(expected);
    }) 
})