let id = document.querySelector(".id");
let advice = document.querySelector(".advice");
let buttonDice = document.querySelector(".dice");

window.onload = () => {
    getAdvice();
}

buttonDice.addEventListener("click", () => {
    getAdvice();
})



function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        adviceObj = adviceData.slip;
        id.innerHTML = adviceObj.id;
        advice.innerHTML = "\"" + adviceObj.advice + "\"";
    }).catch(error => {
        id.innerHTML = "Error";
        advice.innerHTML = error;
    });
}


