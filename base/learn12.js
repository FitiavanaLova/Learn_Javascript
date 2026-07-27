//Trouve la plus grande valeur d'un tableau.

let numbers=[5, 9, 1, 30, 12];
let max = numbers[0];
for (let i=1;i<numbers.length;i++){
    if (numbers[i]>max){
        max=numbers[i];
    }
}
console.log(max);
