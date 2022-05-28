console.log("22.3-> The thing which we did using callback function in 21.2.js, the same thing here we will do using Promises")

// Suppose this is response from a web server
const studentsList=[
    {name:"Pankaj", subject:"Javascript"},
    {name:"Amyra", subject:"Rust"}
]

function enrollStudent(student)
{
    let error=true;
    // It will enroll a new student to the studentsList
    return new Promise(function(resolve,reject){
        // Lets suppose this function is a block of code which is going to take 3 seconds( So we write inside setTimeout with 3000 ms)
        setTimeout(function(){
            studentsList.push(student)
            console.log("Student has been enrolled")
            error=false
            if(!error)
            {
                resolve()
            }
            else
            {
                reject(new Error("Whoops! Some error ocurred"))
            }
        },3000)
    })
}

function getStudents()
{
    // It will fetch all the enrolled students and will populate it into the DOM

    // Lets suppose this function is a block of code which is going to take 1 seconds( So we write inside setTimeout with 1000 ms)

    setTimeout(function(){
        str=''
        studentsList.forEach(function(student){
            str+=`<li>${student.name}</li>`
        })
        document.getElementById('studentList').innerHTML=str
        console.log("Students have been fetched")
    },1000)

}

let newStudent={name:"Renu", subject:"Python"}


enrollStudent(newStudent).then(getStudents).catch(function(error){
    console.log(error)
})
