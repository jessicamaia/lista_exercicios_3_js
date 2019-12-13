let MaiorNum = 0;
let Numero = 00;

for(let i=1; i<=5; i++){
	Numero = prompt ('Por favor insira um número','');
	if(Numero>MaiorNum){
		MaiorNum = Numero;
		
	} 
}

alert (MaiorNum);