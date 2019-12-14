let nome= prompt ('Por favor insira seu nome completo:' ,"");
let aux1=nome.split(" ");

function val1(nome){
    if(aux1[0].length < 4){
        alert ("O nome inserido deve conter mais que quatro caracteres")
    }

}

function val2(nome){
    for (let i=0; i<aux1.length; i++){
        if(aux1[i]=="da" || aux1[i]=="de" || aux1[i]=="do"){

        }else if(aux1[i][0]!=aux1[i][0].toUpperCase()){
            alert("A primeira letra deve ser maiúscula")
        }
    }
    
}

function val3(nome){
    if(!aux1[1]){
       alert("Deve existir pelo menos um sobrenome")
    }
}

function val4(nome){
    let eumnumero;
    for(let i=0; i<nome.length; i++){
       if(isNaN(parseInt(nome[i])) == false){
           alert("Tem numero");
           return;
       }
    }
}

val1(nome);
val2(aux1[0]);
val3(nome);
val4(nome);