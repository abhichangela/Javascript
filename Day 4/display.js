console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("process.nextTick"));

console.log("End");

/* OUTPUT
Start
End
process.nextTick
setTimeout
setImmediate */

/* Explanation:
process.nextTick() executes its callback immediately after the current operation, before 
the event loop continues.
setImmediate() runs callbacks in the check phase — right after I/O events.
setTimeout() schedules callbacks after a minimum delay, handled in the timers phase.
So their main difference lies in when they’re executed within the Node.js event loop. */