// promiseObj.finally

// The call .finally(function) is similar to .then(function, function) in the sense that 
// 'function' always runs when the promise is settled: be it resolve or reject.

// finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

// let promiseObj=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Executor code done soemthing for 3 second")
//         resolve("Done!")
//     }, 2000)
//   })

// promiseObj.then((result) => {
//     console.log(result)
// })
// .finally(() => {
//     console.log("Promise ready, Stop the loading indicator")
// });

let promiseObj=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Executor code was not able to finish the task after 2 second")
        reject(new Error("Whoops!"))
    }, 2000)
  })

promiseObj.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Promise ready, Stop the loading indicator")
});