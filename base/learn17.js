const btn=document.querySelector("button");
const texte=document.getElementById("texte");

btn.addEventListener("click", function () {
    if (texte.style.display === "none") {
        texte.style.display = "block";
        btn.textContent = "Masquer";
    } else {
        texte.style.display = "none";
        btn.textContent = "Afficher";
    }
});