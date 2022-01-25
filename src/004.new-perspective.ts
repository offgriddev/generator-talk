/**
 * Making sense of Generators
 */

// Benefits
// 1. Every yield pauses execution making concurrent code 'cooperatively' concurrent
// 2. Provides higher-order structure to JavaScript code (i.e. orchestration, see: Azure Durable Functions)
// 3. Manages state
// 4. Allows for non-blocking loops
// 5. Lazy Evaluation

// Drawbacks
// 1. Performance (plain-old iterators are often 2x faster than generators)
//    - see references: callbacks v. promises
//    - knowledge of event loop needs to be considered in how we bench these operations
// 2. Introduces a new way of thinking about how we code loops
