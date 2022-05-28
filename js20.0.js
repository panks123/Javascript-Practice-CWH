// Asynchronous programming

// Synchronous -- Means when there are multiple tasks, and these tasks are completed one by one. The second task has to wait for first one to
// complete, the 3rd one has to wait for second one to complete and so on. So, in this case more time is required to complete a set of tasks

// Asynchronous-- Means a set of tasks can run simultaneously.

// Many times we need that two or more independent blocks of code should run independently at the same time , so that less time is taken to 
// complete the overall program -- Here comes the concept of asynchronous programming 

// Few ways to write asynchronous code in Javascript are:
// Asynch/await
// Callbacks and
// Promises

// for(let i=0;i<3000;i++)
// {
//     console.log(`This is line no. ${i+1}`)
// }
// console.log("Done printing")

// In the above code it will run the for loop for 3000 times then only it will print the "Done printing"
// So this is an example of synchronous programming

setTimeout(()=>{
    for(let i=0;i<3000;i++)
    {
        console.log(`This is line no. ${i+1}`)
    }
},100)


console.log("Done printing")
// Here it will run "Done printing" then it will run the loop inside setTimeout
