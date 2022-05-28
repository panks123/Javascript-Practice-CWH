// fetch api

console.log("js23.js")
btn=document.getElementById('myBtn')

function getData(){
    console.log("Started running getData")
    let url='pankaj.txt'
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text() // This returns a Promise object
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

// fetch(url).then((response)=>{
    // The fetch api returns a promise object (the first then() is executed  for that to again return the response as a 
        // promise object which is resolved by the second then())
// }).then((data)=>{

// })

console.log("Before running getData")
getData()
console.log("After running getData")

// Output:

// Before running getData
// Started running getData
// After running getData              ---> This line is executed first because the fetch() will run in background -> asynchronous
// Inside first then
// Inside second then
// pankaj is a good boy
//     certified by: Pankaj

