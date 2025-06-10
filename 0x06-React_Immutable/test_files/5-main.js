import { mergeElements, concatElements } from './5-merge';

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

console.log('Merge:', mergeElements(obj1, obj2).toJS());
console.log('Concat:', concatElements(arr1, arr2).toJS());
