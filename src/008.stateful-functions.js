// simplistic example of a stateful function

var coroutineClock = coroutine(function*() {
    while (true) {
        yield;
        console.log('Tick!');
        yield;
        console.log('Tock!');
    }
});

coroutineClock() // Tick
coroutineClock() // Tock

var ticking = true;
var callbackClock = function() {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
}

callbackClock() // Tick
callbackClock() // Tock
