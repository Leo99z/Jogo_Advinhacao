function sort(){
    return Math.round(Math.random() * 10);
}

function numbers(quant){
    var segredos = [];
    var numero = 1;
    while(numero <= quant){
        var ramdomNumber = sort();
        if(randomNumber != 0){
            var achou = true;
            for(var posicao = 0; posicao < segredos.length; posicao++){
                if(segredos[posicao] == randomNumber){
                    achou = true;
                    break;
                }   
            }
            if(achou == false){
                segredos.push(randomNumber);
                numero++;
            }
        }
    }
    return segredos;
}
var segredos = numbers(5);
console.log(segredos);

var input = document.querySelector("input");
input.focus;

function verify(){
    var achou = false;
    for(var posicao = 0; posicao < segredos.length; posicao++){
        if(input.value == segredos[posicao]){
            alert("VOCÊ ACERTOU");
            achou = true;
            break;
        }
    }
    if(achou == false){
        alert("Você Errou!!");
    }

    input.value = "";
    input.focus();
}
    var button = document.querySelector("button");
    button.onclick = verify;