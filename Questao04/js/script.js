let idade=0; 
let MaiorDeIdade=0; 
let MenorDeIdade=0;

while (idade  != 'fim') {
    idade= prompt ('Por favor insira uma idade:' ,"");
    if (idade=="fim"){
        break;
    }
    idade=Number (idade); 
    if (idade >=18){
        MaiorDeIdade++;
    } 
    if(idade <18){
        MenorDeIdade++;
    }
}

alert ('Quantidade inserida de pessoas maiores de idade: '+ MaiorDeIdade + "\n" + 'Quantidade inserida de pessoas menores de idade: '+ MenorDeIdade);
