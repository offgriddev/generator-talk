/**
 *
 *         Kyle Simpson's Technical Perspective
 *
 */

// The failure of promises

const trustablePromise = new Promise((res, rej) => {
  res('kept promise');
});

trustablePromise
  .then(() => '...more about the promise')                               // always runs to completion
  .then(() => '...still more about the promise')                         // |
  .then(() => 'There can be a lot to promises.')                         // |
  .then(() => 'You can get really attached to them.')                    // |
  .then(() => 'and they can go on')                                      // |
  .then(() => 'and on')                                                  // |
  .then(() => '...')                                                     // |
  .then(() => '...')                                                     // v
  .then(() => '...and on')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...and on')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...and on')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...and on')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...and on')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...but what if I want this to stop')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...I cannot cancel a promise.')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...Once it is made, it must be seen through to the end')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...')
  .then(() => '...')                                                    // whenever the chain ends
  .then(() => '...')                                                    // |
  .then(() => '...')                                                    // |
  .then(() => '...')                                                    // v
  .then(() => '...')
  .then(() => '...Moose...')
  .then(() => '...')
  .then(() => '...')
