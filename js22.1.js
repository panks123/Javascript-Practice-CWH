// promiseObj.catch

// If we are interested in only error then we can place null in  place of first argument in .then

// let promiseObj=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Executor code was not able to finish the task after 1 second")
//         reject(new Error("Whoops!"))
//     }, 3000)
// })

// promiseObj.then(null,
// function(error){
//     console.log(error)
// }
// )

// OR : in place of this we can use .catch. Actually, .catch(function) is same as .then(null,function)

let promiseObj=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Executor code was not able to finish the task after 1 second")
        reject(new Error("Whoops!"))
    }, 3000)
})

promiseObj.catch(function(error){
    console.log(error)
}
)