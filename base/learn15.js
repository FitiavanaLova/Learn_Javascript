//Avec ce HTML :
//<h1 id="titre">Bonjour</h1>
/// <button>Changer</button>
//Quand on clique sur le bouton, le texte devient :Bonsoir

const titre=document.getElementById("titre");
const bouton=document.querySelector("button");
bouton.addEventListener("click",function(){
    titre.textContent="Bonsoir";
});