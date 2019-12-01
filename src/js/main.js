"use strict"
let x = document.getElementsByClassName("input__block")[0].outerHTML;

addBtn.addEventListener("click", function () {
    document.getElementsByClassName("inputs")[0].innerHTML += x;
});

removeBtn.addEventListener("click", function () {
    let formContainer = document.getElementsByClassName("inputs")[0];
    if (formContainer.children.length > 1){
        formContainer.removeChild(formContainer.lastChild);
    }
});

clearBtn.addEventListener("click", function () {
    let listOfInputs = document.getElementsByClassName("inputs")[0].getElementsByTagName("input");
    for (let item of listOfInputs) {
        item.value = "";
    }
});