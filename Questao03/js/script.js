let FraseFinal= ""
let palavra

while (palavra  != 'fim') {
    palavra= prompt ('Por favor insira uma palavra:' ,"");
    if(palavra=="fim"){
        break;
    }


    palavra+=" ";
    palavra += FraseFinal;
    FraseFinal=palavra;
}

alert(FraseFinal);

