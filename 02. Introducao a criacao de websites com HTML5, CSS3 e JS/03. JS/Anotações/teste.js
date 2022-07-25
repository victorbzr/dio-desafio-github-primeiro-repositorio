//var y = 0;
/*var x = 1;
const PRECO = 2;*/

/* comentário
de várias
linhas*/

//funções
/*
function soma(a, b){
    console.log(a + b);
    return a + b;
}

x = soma(2,3);*/

//console.log('hello world!');


function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.lenght; i++){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        }
        else{
            console.log(array[i],' é impar.');
        }
    }
    console.log('os núm pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);