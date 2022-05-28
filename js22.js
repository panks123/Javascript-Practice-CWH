// Promises in JS

// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. 
// The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the consuming
//  code when it’s ready.

/*
The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
  // executor code (the producing code)
});

The function passed to new Promise is called the executor that perform a job (usually something that takes time) . 
When new Promise is created, the executor runs automatically.
Its arguments resolve and reject are callbacks provided by JavaScript itself.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- resolve(value) — if the job is finished successfully, with result value.
- reject(error) — if an error has occurred, error is the error object.
*/

// So the Promise object has the following states

// 1. Resolved -- If the promise gets resolved (if resolve() gets called)
// 2. Rejected -- If the promise gets rejeted due to some error(if reject() is called)
// Resolved and Rejected states are collectively called settled (Promise settled)
// 3. Pending -- When the executor code is still running and reject() or resolve() has not been called yet by the executer code

// Consumers: then, catch, finally : Consuming functions can be registered using methods .then, .catch and .finally.

// then: 
// The syntax is:

// promiseObj.then(function(result){}, function(error){})

// the first argument function runs when the promise is resolved and the second argument function will run when the promise is rejected

let promiseObj=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Executor code done soemthing for 3 second")
        resolve("Done!")
    }, 3000)
})

promiseObj.then(function(result){
    console.log(result)
},
function(error){
    console.log(error)
}
)

// As the Promise is being resolved after 3 sec so first function will run


// let promiseObj=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Executor code was not able to finish the task after 3 second")
//         reject(new Error("Whoops!"))
//     }, 3000)
// })

// promiseObj.then(function(result){
//     console.log(result)
// },
// function(error){
//     console.log(error)
// }
// )

// catch and finally are discussed later in js22.1.js and js22.2.js