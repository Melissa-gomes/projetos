let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for(let isso = 0; isso < numbers.length; isso++){
    resultado = numbers[isso]%2 != 0
    if(resultado != false && resultado != true){
        console.log("nenhum valor ímpar encontrado!")
    }
}