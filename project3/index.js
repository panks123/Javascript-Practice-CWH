console.log("Project 4- Email validation using JS")

let nam=document.getElementById('name')
let email=document.getElementById('email')
let phone=document.getElementById('phone')

let nameValid=false
let emailValid=false
let phoneValid=false

// We'll validate the name, email, and phone input using Regular Expression

nam.addEventListener('input',()=>{
    // console.log('Name is blurred')
    let regex=/^[a-zA-Z]([0-9a-zA-Z ]){2,20}$/;
    if(regex.test(nam.value)){
        nam.classList.remove('is-invalid') // is-invalid is a bootstrap class
        nameValid=true
    }
    else{
        nam.classList.add('is-invalid')
        nameValid=false
    }
})

email.addEventListener('input',()=>{
    console.log('Email is blurred')
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if(regex.test(email.value)){
        email.classList.remove('is-invalid') // is-invalid is a bootstrap class
        emailValid=true
    }
    else{
        email.classList.add('is-invalid')
        emailValid=false
    // Validating email input
    }
})

phone.addEventListener('input',()=>{
    console.log('Phone is blurred')
    let regex=/^([0-9]){10}$/;
    if(regex.test(phone.value)){
        phone.classList.remove('is-invalid') // is-invalid is a bootstrap class
        phoneValid=true
    }
    else{
        phone.classList.add('is-invalid')
        phoneValid=false
    // Validating phone input
    }
})

btn=document.getElementById('submit')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("Subit clicked")
    let success=document.getElementById('success')
    let failure=document.getElementById('failure')
    let insideSuccess=`<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Success!</strong> Your travel request has been successfully submitted
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    `
    let insideFailure=`<div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> Your travel request has not been sent due to errors. Please enter correct details
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    `
    let alert=document.getElementById('alert')

    if(nameValid && emailValid && phoneValid)
    {
        console.log("Form validated")
        alert.innerHTML=insideSuccess
    }
    else
    {
        console.log("Form not validated")
        alert.innerHTML=insideFailure
    }
    setTimeout(()=>{
        alert.innerHTML=''
    },4000)
})





