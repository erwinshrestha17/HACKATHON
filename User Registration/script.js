let fname = document.getElementById("firstname").value;
let lname = document.getElementById("lastname").value;
let email = document.getElementById("email").value;
let dob = document.getElementById("email").value;
let btn = document.getElementById("btn");


btn.addEventListener(onclick(), () => {
    if (fname == " ") {
        alert("Enter first name");
        return 0;
    }
    if (lname == " ") {
        alert("Enter last name");
        return 0;
    }

})
