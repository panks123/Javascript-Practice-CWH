// Callback functions

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function 
// to complete some kind of routine or action.

function greet(name)
{
    // This function is used as callback function
    console.log(`Hello ${name}!`)
}

function enterUserName(callback)
{
    let name=prompt("Enter your name: ")
    callback(name)
}

enterUserName(greet)

// But, this is an example of synchronous callback

// Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. 
// In other words, actions that we initiate now, but they finish later.

// For instance, one such function is the setTimeout function.

setTimeout(function(){
    greet("Renu")
},2000)
console.log("Below setTimeout")

// This is an example of asynchronous callback