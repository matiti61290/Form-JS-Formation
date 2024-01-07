//put the form in variables
let form = document.querySelector("form");
let newFirstName = document.getElementById("first-name");
let newLastName = document.getElementById("last-name");
let newComment = document.getElementById("message");
let commentList = document.getElementById("comment-list");

//function to add the event when submit the form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if(validate() == 0){
        showErrorMessage()
        return;
    }

    addNewComment()
    hideErrorMessage()
    form.reset()
});

//function to check the length of fields
function validate() {
    return newFirstName.value.length && newLastName.value.length && newComment.value.length;
}

function showErrorMessage() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
}

function hideErrorMessage() {
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
}

function addNewComment() {
    let commentBlockBase = commentList.lastElementChild.cloneNode(true)
    let name = newFirstName.value + " " + newLastName.value

    commentBlockBase.querySelector("h3").innerHTML = name
    commentBlockBase.querySelector("p").innerHTML = newComment.value

    commentList.appendChild(commentBlockBase)
}