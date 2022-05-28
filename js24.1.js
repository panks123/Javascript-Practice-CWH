async function f(){
    return 1;
}

let promiseObj=f()
console.log(promiseObj)
promiseObj.then((data)=>{
    console.log(data)
})