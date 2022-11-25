let comments = [];
let name = document.getElementById("newSpam").value;

function addComment() {
    let name = document.getElementById("newSpam").value;
    comments.push(name);
    checkSpam(name);
    generateComments();
    document.getElementById("newSpam").value = '';
}

function generateComments() {
    let optionsString = "";
    for (let comment of comments) {
        optionsString += `<div><p>${comment}</p></div>`;
    }
    document.getElementById("conteiner").innerHTML = optionsString;
}
document.addEventListener("DOMContentLoaded", function () {
    generateComments();
});

function checkSpam(name) {
    let name1 = name.toLowerCase();

return name1.includes('viagra') || name1.includes('xxx');
}