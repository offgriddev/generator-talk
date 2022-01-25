/**
 *
 *  Besides yields and *, what really makes generators different?
 *
 */

// run to completion

function goToTheEnd () {
  console.log(1);
  console.log(2);
  console.log(3);
}

/**
 * goToTheEnd()
 * 1
 * 2
 * 3
 * return;
 */

// generators break the run to completion model

function* pauseForEach () {
  yield 1;
  yield 2;
  yield 3;
}

for(const val of pauseForEach()) {
  console.log(val);
}
/**
 * const iterator = pauseForEach(); { value: null, next(), done: false }
 * pauseForEach.next() // 1 { value: 1, next(), done: false }
 * pauseForEach.next() // 2 { value: 2, next(), done: false }
 * pauseForEach.next() // 3 { value: 3, next(), done: true }
 * return;
 */
