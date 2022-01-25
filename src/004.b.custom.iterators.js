/**
 *
 *   Symbol.iterator - an abstraction around loops
 *
 *   You have to call it in a loop to know when it's done.
 *
 */

// Promises are 'thenable'
// Generators / Iterators are 'nextable'

const customIterator = {
  [Symbol.iterator]: function * () {
    yield 'This';
    yield 'is';
    yield 'iterable';
  }
}

console.log(...customIterator);
// This is iterable

class GeneratorClass {
  *[Symbol.iterator] () {
    yield 'This';
    yield 'is';
    yield 'iterable';
  }
}

console.log(...new GeneratorClass);
// This is iterable

/**
 * Other iterables include: Map, Set, String, Array
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
