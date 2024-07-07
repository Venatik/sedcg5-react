"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyArray(items) {
    return new Array(...items);
}
const stringsArray = copyArray(['one', 'two', 'three']);
console.log(stringsArray);
const numberArray = copyArray([1, 2, 3, 4]);
console.log(numberArray);
const tripsArray = copyArray([{}]);
console.log(tripsArray);
//# sourceMappingURL=index.js.map