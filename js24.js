console.log("JS24") // 1. order of execution

// Async await

async function hello(){
    // After making the function as async, it(function) will return a Promise object
    console.log("Inside hello function") // 3.
    // Now let's suppose we are going to wait for a fetch api to get resolved which will return a Promise object
    let response=await fetch("https://api.github.com/users")
    console.log("Before users") //7. (But it will execute once the above  Promise is resolved)
    let users=await response.json() // This will also return a Promise object(as we had seen earlier)
    console.log("Users resolved") // 8. //7. (But it will execute once the above  Promise is resolved)
    return users
}

// After running this js file, look into it's output's code flow. You will understand the meaning of await
console.log("Before calling hello function") // 2.
let promiseObj=hello()
console.log("After calling hello function") // 4. 
console.log(promiseObj)     // 5. But here as the promise is not resolved yet so it will print a pending Promise object
promiseObj.then((data)=>console.log(data)) //9.  As the Promise is not resolved( after 5. ), so it will not execute for now . It will execute but first 
                                          // the below line will execute then it will go back into hello() were it had left executionafter the below line
console.log("Last line of the js file") //6.