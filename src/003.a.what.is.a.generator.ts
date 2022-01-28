/**
 *
 * What is a Generators?
 *
 */

// syntax
function* left() { // <--- * signifies a generator
  yield 1; // <--- yielding must happen in a generator
  yield 2;
  yield 3;
}

function * center() {
  yield 1;
  yield 2;
  yield 3;
}

function *right() {
  yield 1;
  yield 2;
  yield 3;
}

// if you want to yield an iterable from a generator and have the
// consuming function yield each, you need to add a *

function* yieldAll() {
  yield* left();
  yield* center();
  yield* right();
}

console.log([...yieldAll()]);
// 1 2 3 1 2 3 1 2 3
