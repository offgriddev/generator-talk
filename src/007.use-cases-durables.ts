/**
 * Azure Durable Functions
 */

const df = require("durable-functions");
const moment = require('moment');

// Durable Orchestrators use an iterator to save the state of
// serverless execution of each Activity Function. Upon replying of a Durable function
// the Orchestrator pulls the last run state from blob storage and uses it to
// continue a given execution.
//
//
// Durable Functions are an Azure equivalent to AWS Step Functions
module.exports = df.orchestrator(function*(context) {
    yield context.df.callActivity("RequestApproval");

    const dueTime = moment.utc(context.df.currentUtcDateTime).add(72, 'h');
    const durableTimeout = context.df.createTimer(dueTime.toDate());

    const approvalEvent = context.df.waitForExternalEvent("ApprovalEvent");
    if (approvalEvent === yield context.df.Task.any([approvalEvent, durableTimeout])) {
        durableTimeout.cancel();
        yield context.df.callActivity("ProcessApproval", approvalEvent.result);
    } else {
        yield context.df.callActivity("Escalate");
    }
});

/**
 * next-tools example...
 */
