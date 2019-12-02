"use strict"
const x = document.getElementsByClassName("input__block")[0].outerHTML;

let funcadd = () => {
    document.getElementsByClassName("inputs")[0].innerHTML += x;
};

let funcrmove = () => {
    let formContainer = document.getElementsByClassName("inputs")[0];
    if (formContainer.children.length > 1){
        formContainer.removeChild(formContainer.lastChild);
    }
}


addBtn.addEventListener("click", funcadd);

removeBtn.addEventListener("click", funcrmove);

clearBtn.addEventListener("click", () => {
    let listOfInputs = document.getElementsByClassName("inputs")[0].getElementsByTagName("input");
    for (let item of listOfInputs) {
        console.log(item.value);
        item.value = "";
        
    }
});