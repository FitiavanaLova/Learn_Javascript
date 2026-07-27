const compteur = document.getElementById("compteur");
const btn = document.querySelector("button");



let number = 0;
btn.addEventListener("click", function () {
    number++;
    compteur.textContent = number;
});