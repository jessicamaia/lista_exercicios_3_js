let nome= ""
let NNome
let SemESpaco
 
function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

nome= prompt ('Por favor insira seu nome completo:' ,"");
NNome= nome.length;

NomeSemEspaco= replaceAll (nome,' ', "");
SemEspaco=NomeSemEspaco.length;

alert('O nome inserido tem '+NNome + " caracteres" + " e " + SemEspaco + " letras.");
