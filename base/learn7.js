//Calcule la somme :

//1 + 2 + 3 + ... + 100
let sum =0;
for (let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);

//with function
function sum1(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum1(100));

//with while
let sum2=0;
let i=1;
while (i<=100){
    sum2+=i;
    i++;
}
console.log(sum2);
