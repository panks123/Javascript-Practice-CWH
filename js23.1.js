console.log("Js23.1")
// GET json data using fetch api


function getData(){
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json() // This will return a promise object again- we are sending the response as json object so that in the second 
                               // then when we are printing it, it gets printed as an object
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

console.log("Before running getData")
getData()
console.log("After running getData")