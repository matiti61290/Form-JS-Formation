//put the form in variables
let form = document.querySelector("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let comment = document.getElementById("message");

//function to check the length of fields
function validate() {
    return firstName.value.length && lastName.value.length && comment.value.length;
}

//function to display the error message if nothing is written in one field
form.addEventListener("submit", function(event) {
    if(validate() == 0){
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        event.preventDefault();
        return;
        
    }
})