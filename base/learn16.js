const compteur = document.getElementById("compteur");
const btn = document.getElementById("btn");



let number = 0;
btn.addEventListener("click", function () {
    number++;
    compteur.textContent = number;
});