// Benefits
// 1. Every yield pauses execution making concurrently running code 'cooperative' (non-blocking)
//    - Cooperative v. Preemptive Concurrency
//    - Cooperative: a function is "willing" to suspend its execution
//    - Preemptive: a function that is "forced" to suspend its execution (e.g. code that is blocked from running)
// 2. Provides higher-order structure to JavaScript code (i.e. orchestration, see: Azure Durable Functions)
// 3. Manages state
// 4. Allows for non-blocking loops
// 5. Lazy Evaluation
// 6. Infinite while loops do not block the event loop

// Drawbacks
// 1. Performance (plain-old iterators are often 2x faster than generators)
//    - see references: callbacks v. promises
//    - knowledge of event loop needs to be considered in how we bench these operations
//    - historically, even during the promise v callback debate, people often resort to "performance" arguments
//      some like Kyle Simpson argue that writing in a way that mirrors the event loop and 'cooperates' with it
//      will perform better
//    - there are trade-offs to implementing any construct in JavaScript
//
// 2. Iterators encourage a different structure
// 3. A lot of now-native functions like '.map' or '.reduce' do not themselves support generators
//    Thus, a lot of loops inside generators need to be written manually
//
