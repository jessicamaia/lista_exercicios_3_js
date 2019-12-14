let Nome
let NomeCompleto=0;
let Resultado
let Numero;

NomeCompleto=prompt('Por favor insira o nome completo: ',"");
Numero= prompt('Por favor insira um número: ',"");

function validacao(Nome, Numero){
    if(Numero > Nome.length){
        alert("Inválido.");
        return;
    }
    if(Numero == 0){
        alert("Inválido.");
        return;
    }
    if(Numero <= -1){
        alert("Inválido.");
        return;
    }
    
    return Nome.charAt(Numero-1);
}

Resultado=validacao(NomeCompleto,Numero);

alert("O caractere '" + Resultado + "' corresponde ao número da posicao informada.");
