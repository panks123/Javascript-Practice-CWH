console.log("Exercise 5")

// In this exercise we have used the concept of AJAX request as well callback function

function fetchData(populateMeanings){
    const xhr=new XMLHttpRequest()
    xhr.open('GET','wordapi.json',true)

    // xhr.onprogress = function(){
    //     console.log("Data fetching in progress")
    // }
    let fetchedObj;
    xhr.onload = function(){
        if(xhr.status===200)
        {
            // console.log(this.responseText)
            fetchedObj=JSON.parse(this.response)
            populateMeanings(fetchedObj)
            console.log("Data populated")
        }
        else
        {
            console.error("Some error ocurred while fetching data")
        }
    }
    xhr.send()
    console.log("I am outside")
}

function populateMeanings(fetchedObj){
    let html=''
    fetchedObj=fetchedObj['results']
    fetchedObj.forEach(element => {
        html+= `<li class="list-group-item list-group-item-dark">One of the definition of the word 'example' is: <b>${element.definition}</b></li>`
    });
    document.getElementById('definitions').innerHTML=html
}

let btn=document.getElementById('getMeanings')
btn.addEventListener('click',()=>{
    // console.log('Button clicked')
    fetchData(populateMeanings) // populateMeanings is a callback function
})
