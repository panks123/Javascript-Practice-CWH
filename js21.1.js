// Callback functions

// Suppose this is response from a web server
const studentsList=[
    {name:"Pankaj", subject:"Javascript"},
    {name:"Amyra", subject:"Rust"}
]

function enrollStudent(student)
{
    // It will enroll a new student to the studentsList

    // Let's suppose this function is a block of code which is going to take 3 seconds( So we write inside setTimeout with 3000 ms)
    setTimeout(function(){
        studentsList.push(student)
        console.log("Student has been enrolled")
    },3000)
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


enrollStudent(newStudent)
getStudents()

// So we can see that getStudents() is executed first and then enrollStudent is executed
// This is because enrollStudent takes 3000ms and it running asynchronously while getStudents take just 1000ms 
// So getStudents will be executed first

// But what we need is that first the student should be enrolled and then getStudent should be called
// So we can use getStudents as callback function inside enrollStudents (see in js21.2.js)