// pegar data atual
const dataAtual = new Date();
// pegar a hora do dia
const horaAtual = dataAtual.getHours();

let cumprimento= (function(){
    if(horaAtual > 0 && horaAtual <= 4){
        alert("Boa Madrugada, Sr (Sra).Estamos exatamente na casa das " + horaAtual +" horas.")
    }
    if(horaAtual >= 5 && horaAtual < 12){
        alert("Bom Dia, Sr (Sra). Estamos exatamente na casa das " + horaAtual +" horas." )
    }
    if(horaAtual >= 12 && horaAtual < 18){
        alert("Boa Tarde, Sr (Sra). Estamos exatamente na casa das " + horaAtual +" horas." )
    }
    if(horaAtual >= 18){
        alert("Boa Noite, Sr (Sra). Estamos exatamente na casa das " + horaAtual +" horas.")
    }
})();