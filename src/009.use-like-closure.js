function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

const add2 = makeAdder(2);
console.log('add2: ', add2(2)) // 4

function* makeAdderGenerator(x) {
  let y = yield x;
  while (true) {
    y = yield x + y
  }
}

const add2Iterator = makeAdderGenerator(2);
console.log(add2Iterator.next()); // { value: 2, done: false } (initial state)
console.log(add2Iterator.next(2)); // { value: 4, done: false }
