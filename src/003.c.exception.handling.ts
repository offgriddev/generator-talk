function* onlyYieldOnce () {
  const a = 'only-yield-once';
  yield a;
  throw new Error('too-far');
};

const soloYielder = onlyYieldOnce();
soloYielder.next();
soloYielder.next(); // uh oh

// try {
//   const soloYielder = onlyYieldOnce();
//   soloYielder.next();
//   soloYielder.next(); // uh oh
// } catch(e) {
//   console.log(e.message);
// }

function* onlyYieldOnceHandled () {
  const a = 'only-yield-once';
  try {
    yield a;
  } catch(e) {
    console.log('inside generator', e)
  }
  yield a;
  throw Error('too-far');
};

const soloYielderHandled = onlyYieldOnceHandled();
soloYielder.next();
soloYielder.throw(new Error('yikes'));
