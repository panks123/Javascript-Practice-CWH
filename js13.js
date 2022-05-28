console.log('Hello!!')

// Local storage is a storage provided by the browser  to some amount of data in key value pairs
// localStorage.setItem(key,value) ->> It takes key and value as arguments and then stores the key-value pair in the browser localstorage
console.log(typeof localStorage) // So localStorage is of type object
localStorage.setItem('Name','Pankaj')
localStorage.setItem('Name2','Amyra')

// For getting the localStorage data we call the function localStorage.getItem(key)- It takes key as argument
let name=localStorage.getItem('Name')
console.log(name)

name=localStorage.getItem('Name2')
console.log(name)

name=localStorage.getItem('Name3') // If we call localStorage.getItem(key) , and if that key is not 
console.log(name)                  // stored in the localStorage then it will return null

// localStorage.clear() //   --> It will clear all the stored data from the localStorage  

name=localStorage.getItem('Name2')
console.log(name)

localStorage.setItem('name','Emily')
localStorage.setItem('name2','Julia')
console.log(localStorage)
localStorage.setItem('name2','Ananda') // Since we are using the previous key, so it will overwrite the value of the key name2
console.log(localStorage)

// To remove a particular item from the localStorage we call localStorage.removeItem(key) -> here we pass the key of the item we want to remove from the localStorage
localStorage.removeItem('name')
console.log(localStorage) 

// Storing an array in local storage 
impArray=['adrak','lahsun','pyaz']
localStorage.setItem('tempMasala',impArray)
console.log(localStorage) // So we can see that when we store an array into the local storage , it converts the array elements into a string

// how to prevent it from storing an array as a string of elements of the array 
// We can use JSON.stringify() to convert the array into a string but with array structure retained i.e. with [] brackets containing the elements
localStorage.setItem('masala',JSON.stringify(impArray))
console.log(localStorage)

// console.log(localStorage.getItem('masala')) // This will be a string

// But suppose we want it as an array- then we w'll use JSON.parse()
let masala=JSON.parse(localStorage.getItem('masala'))
console.log(masala)

// sessionStorage have same functionalites as localStorage  (All the functions are similar) but
// the difference between localStorege and session storage is that data present in localStorage will be not be cleared even if we close the page 
// (we can check by reopening the page) , but sessionStorage data is cleared when the page session ends , that is when that page is closed, 
// the data inside the sessionStorage will be cleared automatically
 
// console.log("x:"+sessionStorage)
// sessionStorage.setItem('name','Emilia')
// sessionStorage.setItem('name2','Julie')
// console.log("x:"+sessionStorage)
