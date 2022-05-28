// function validateEmail(email) {
//     // var emailID = document.myForm.EMail.value;
//     atpos = email.indexOf("@");
//     dotpos = email.lastIndexOf(".");

//     if (atpos < 1 || ( dotpos - atpos < 2 )) {
//        alert("Please enter correct email ID")
//        return false;
//     }
//     return( true );
//  }
function validateForm() {
    var name = document.forms["myForm"]["Name"];
    var phone = document.forms["myForm"]["Phone"];
    var email = document.forms["myForm"]["Email"];
    if (name.value == "") {
        window.alert("Please enter f your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value != "") {
        var atpos = email.value.indexOf("@");
        var dotpos = email.value.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter correct email ID")
            email.focus();
            return false;
        }
        return (true);
    }

    if (phone.value == "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }
}