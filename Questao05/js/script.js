let data

function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

data= prompt ('Por favor insira uma data:' ,"");

DataSeparada= replaceAll (data, '/', ' ');
document.write(DataSeparada);



