function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        console.log({prev});
        console.log({current});
        return prev+current;
    },0);
}

const arr=[1,2,3,4,5,6];

console.log(somaNumeros(arr));