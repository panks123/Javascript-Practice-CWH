console.log("Js25")
// Errors we can see whenever we do anything unexpected according to JS engine - We can see errors as Red messages in the console

// try-catch (error handling)

// let a
a=10
if(a===undefined)
{
    throw new Error("a is undefined") // How to throw a custom error - using throw keyword we throw an Error object
}
else
{
    console.log("a is defined")
}


// try-catch-finally 

try{
    // When we guess that some block of code can throw Error but we want that if it throws an error then the other JS lines of code should not 
    // stop execution then we put that block of code inside try block
    console.log("Inside try")
    fun1()
}
catch(err){
    // If some error occurs in try block, We have to necessarily catch that in catch - In catch  block we write those codes which will execute 
    // only after an error is caught in the catch block from try block
    console.log(err) // It will print the complete message of error with name of the error
    console.log(err.name) // It will print just the name of the error
    console.log(err.message)
}
finally{
    // finally block will always run - whether error caught or not
    console.log("It will always run")
}


