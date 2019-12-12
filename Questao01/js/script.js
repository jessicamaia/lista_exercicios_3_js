let NT=0;
let N=0;
var C=0;
while(N != 'fim'){
	 N= prompt('Por favor insira uma nota: ',"");

	if(N != 'fim'){
		NT += Number(N);
		i++;	
	}
}

let MediaFinal= NT/C;

alert("A média final é: "+ MediaFinal);