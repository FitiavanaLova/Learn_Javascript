//Calcule la somme :
//for
let notes = [12, 15, 18, 10];
let sum =0;
for (let i=0;i<notes.length;i++){
    sum+=notes[i];
}
console.log(sum);   
//with function
function sum1(notes){
    let sum=0;
    for (let i=0;i<notes.length;i++){
        sum+=notes[i];
    }
    return sum;
}
console.log(sum1([12, 15, 18, 10]));
