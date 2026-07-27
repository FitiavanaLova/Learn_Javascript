//Affiche chaque fruit.
let fruits = ["Pomme", "Banane", "Orange"];
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Affiche chaque fruit avec forEach.
fruits.forEach(function(fruit){
    console.log(fruit);
});

//while
let i = 0;
while (i<fruits.length){
    console.log(fruits[i]);
    i++;
}

//function
function displayFruits(fruits){
    for (let i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    }
}
displayFruits(fruits);