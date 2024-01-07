//put the form in variables
let form = document.querySelector("form");
let newFirstName = document.getElementById("first-name");
let newLastName = document.getElementById("last-name");
let newComment = document.getElementById("message");
let commentList = document.getElementById("comment-list");

//function to check the length of fields
function validate() {
    return newFirstName.value.length && newLastName.value.length && newComment.value.length;
}

function addCommentToList() {
    //Create the new comment area in the list
    let newCommentList = document.createElement("div");
    let newCommentListStyle = document.createAttribute("class");
    newCommentListStyle.value = "flex space-x-4 text-sm text-gray-500";
    newCommentList.setAttributeNode(newCommentListStyle);

    //create the new content area in the comment area
    let newContentArea = document.createElement("div");
    let newContentAreaStyle = document.createAttribute("class");
    newContentAreaStyle.value = "flex-1 py-10 border-t border-gray-200";
    newContentArea.setAttributeNode(newContentAreaStyle);

    //Add first name and last name used in the form
    let newNameTitle = document.createElement("h3");
    let newNameTitleStyle = document.createAttribute("class");
    newNameTitleStyle.value = "font-medium text-gray-900";
    newNameTitle.setAttributeNode(newNameTitleStyle);
    let nameText = document.createTextNode(newFirstName.value + " " + newLastName.value);

    //add the comment area
    let newCommentarea = document.createElement("div")
    let newCommentareaStyle = document.createAttribute("class")
    newCommentareaStyle.value = "prose prose-sm mt-4 max-w-none text-gray-500"
    newCommentarea.setAttributeNode(newCommentareaStyle)

    //add the comment written in the form
    let comment = document.createElement("p")
    let commentText = document.createTextNode(newComment.value)

    //add the name to the HTML
    newNameTitle.appendChild(nameText);
    newContentArea.appendChild(newNameTitle)
    newCommentList.appendChild(newContentArea)
    commentList.appendChild(newCommentList);

    //add the comment in the HTML
    comment.appendChild(commentText)
    newContentArea.appendChild(comment)
}

//function to add the event when submit the form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(validate() == 0){
        let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        return;
    }
    addCommentToList()
    form.reset()
})