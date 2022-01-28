/**
 *
 *         Kyle Simpson's Technical Perspective
 *
 */

// Promises need some kind of organization
// ...they need a "higher-order" concept
// Generators provide that higher-order concept
// The introduction of co-routines

const co = require('co');

async function dependablePromise (additionalPromise) {
  if (additionalPromise) {
    await additionalPromise;
  }

  return new Promise((res, rej) => {
    res('kept promise');
  });
}

function* stageOnePromises() {
  try {
    yield dependablePromise();
    yield dependablePromise();
    yield dependablePromise();
  } catch (e) {
    console.log('Error in stage one');
  }
}

function* stageTwoPromises() {
  try {
    yield dependablePromise();
    yield dependablePromise();
    yield dependablePromise();
  } catch (e) {
    console.log('Error in stage two');
  }
}

function* stageThreePromises() {
  try {
    yield dependablePromise();
    yield dependablePromise();
    yield dependablePromise();
  } catch (e) {
    console.log('Error in stage three');
  }
}

function doTheWork() {
  const stageOne = co.wrap(stageOnePromises);
  const stageTwo = co.wrap(stageTwoPromises);
  const stageThree = co.wrap(stageThreePromises);
}

// More information see: https://www.npmjs.com/package/co
// Co-Routines:
//  https://www.npmjs.com/package/js-coroutines
//
