//put the form in variables
let form = document.querySelector("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let comment = document.getElementById("message");

//function to check the length of fields
function validate() {
    return firstName.value.length && lastName.value.length && comment.value.length;
}

function addCommentToList() {
    //Create the first div
    let commentList = document.getElementById("comment-list");
    let commentArea = document.createElement("div");
    let commentAreaStyle = document.createAttribute("class");
    commentAreaStyle.value = "flex space-x-4 text-sm text-gray-500";
    commentArea.setAttributeNode(commentAreaStyle);

    //create the second div
    let nameArea = document.createElement("div");
    let nameAreaStyle = document.createAttribute("class");
    nameAreaStyle.value = "flex-1 py-10 border-t border-gray-200";
    nameArea.setAttributeNode(nameAreaStyle);

    //Add name of the comment
    let name = document.createElement("h3");
    let nameStyle = document.createAttribute("class");
    nameStyle.value = "font-medium text-gray-900";
    name.setAttributeNode(nameStyle);
    let nameText = document.createTextNode(firstName.value + " " + lastName.value);

    //add the new comment
    name.appendChild(nameText);
    nameArea.appendChild(name)
    commentArea.appendChild(nameArea)
    commentList.appendChild(commentArea);
}

//function to display the error message if nothing is written in one field
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(validate() == 0){
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        return;
    }
})