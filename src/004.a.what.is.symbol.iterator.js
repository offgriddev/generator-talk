/**
 *
 *   Symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 *
 *   a built-in global object whose constructor returns a 'symbol' primitive (1 of the seven pimitives in JS)
 *   guaranteed to be unique
 *
 */

/**
 *
 *   Symbol.iterator: specifies the default iterator for an object (note: an Array is an Object and has
 *   a default iterator)
 *
 *   use whenever:
 *    1. an object needs to be iterated
 *    2. to write a loop
 *
 */

// iterable without a generator, notice the state `step`
// 'nextable' duck type
const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 'This', done: false};
        } else if (step === 2) {
          return { value: 'is', done: false};
        } else if (step === 3) {
          return { value: 'iterable.', done: false};
        }
        return { value: '', done: true };
      }
    }
  },
}

console.log(...iterableObj);
// This is iterable

function* customIterator() {
  yield 'This';
  yield 'is';
  yield 'iterable';
}
console.log(...customIterator());
