'use strict';

const submitButton = document.querySelector("#submitButton");

submitButton.onclick = function(){
    const userNameInput = document.querySelector("#userNameInput").value;
    const passwordInput = document.querySelector("#passwordInput").value;
    const tunnukset = document.querySelector("#tunnukset");

    tunnukset.innerHTML = `Käyttäjätunnus ${userNameInput} ja salasana ${passwordInput}`;

return false;
}