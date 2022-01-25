/**
 *
 *         Kyle Simpson's Technical Perspective : Trust
 *
 */

// The failure of callbacks
// The primary problem is that of trust

const analyticsEngine = {                  // always runs to completion
  logUserAnalytics(callbackFn) {           // |
    // log analytics                       // |
    const logResult = true;                // |
    if (logResult) {                       // |
      callbackFn();                        // x
    }                                      //
  }
};

analyticsEngine.logUserAnalytics((arg0, arg1, arg2) => {
  // submit cart order
});

                                                            // ^ You dont know how many times this will be called
                                                            // it could be called before
                                                            // it could be called more than once
/**    o   |=----------------------------------=|           // it could never be called at all
 *    /|\  | I've never trusted a callback, and |           // it might not pass along the data you really need at the environment level
 *    / \  | I never will.                      |           //
 *         |=----------------------------------=|           // This kind of dependency injection via callbacks is probably causing you
                                                            // a bug right now and you don't know it. You can't trust that it will be called
                                                            // as you expect it. You can always be skeptical of a callback.
