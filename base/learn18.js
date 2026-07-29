// Calculatrice
const prompt=require("prompt-sync")();
function addition(a,b) {
    return a+b;
}
function soustraction(a,b) {
    return a-b;
}
function product (a,b) {
    return a*b;
}
function quotient(a,b) {
    return a/b;
}

let a=parseInt(prompt("inserez le nombre! :"));
let b=parseInt(prompt("inserez le nombre! :"));
let choix=prompt(`choisisez : \
     a: pour l'addition \
     b: pour la soustraction \
     c: pour la multiplication \
     d: pour la division\
     Entrer votre choix: `);

function calculatrice(a,b) {
    if (choix =="a") {
        return addition(a,b);
    }if (choix=="b"){
        return soustraction(a,b);
    }if (choix=="c"){
        return product(a,b);
    } if (choix=="d"){
        return  quotient(a,b);
    }else{
        return "error"
    }
    
}
console.log(calculatrice(a,b));