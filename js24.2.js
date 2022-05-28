async function f()
{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done!")
        },3000)
    })

    let result= await promise
    return result
}

let promiseObj=f()
console.log(promiseObj)
promiseObj.then((data)=> console.log(data))