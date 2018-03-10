	creaCookies();
	var cukisTotes = document.cookie.split(";");
	var numeroEntrada = cukisTotes[0].substr(2);
	var costosGestio = cukisTotes[1].substr(3);
	var total = cukisTotes[2].substr(3);

window.addEventListener("load", main());

function main(){

	var entrada = document.getElementById("entrada");
	var select = entrada.addEventListener("change", canvi);
	var radiob = document.getElementById("no");
	radiob.innerHTML = total + " €";
}

function magia(){
	document.getElementById('centre').style.visibility = 'hidden';

		cukisTotes = document.cookie.split(";");
		numeroEntrada = cukisTotes[0].substr(2);
		costosGestio = cukisTotes[1].substr(3);
		total = cukisTotes[2].substr(3);

		var numE = document.getElementById("nE");
		numE.innerHTML = numeroEntrada;

		var costusP = document.getElementById("costus");
		costusP.innerHTML = "+ " + parseFloat(costosGestio).toFixed(2) + " €";

		var primertotal = document.getElementById("tutal");
		primertotal.innerHTML = "+ " + (numeroEntrada*15).toFixed(2) + " €"

	if(document.getElementById("seguroSi").checked){

		var seguro11 = document.getElementById("seguro1");
		seguro11.innerHTML = "Assegurança d'entrades ";
		var seguro22 = document.getElementById("seguro2");
		seguro22.innerHTML = "+ "+numeroEntrada+".00 €";

		var tutalEnd = document.getElementById("totalEnd");
		var preufinal = (1*total)+(1*numeroEntrada);
		tutalEnd.innerHTML = "TOTAL " + parseFloat(preufinal).toFixed(2) + " €";

		/*

				HE PERDUT MOLT DE TEMPS AMB LES COOKIES, SI ET SEMBLA POC TREBALLADA HO SENTO!
				QUAN HE VIST QUE EM FUNCIONAVEN TOTS ELS REQUERIMENTS BÀSICS HE PARAT PERQUÈ
				NO TINC MÉS TEMPS I EN CANVI TINC MÉS FEINES QUE MAI xD salu2

		*/

	}
	else{
		var tutalEnd = document.getElementById("totalEnd");
		tutalEnd.innerHTML = "TOTAL " + parseFloat(total).toFixed(2) + " €";
	}

}

function canvi(){
	document.getElementById("noZero").disabled = true;
	var nEntrada = document.getElementById("entrada").value;
	if(nEntrada == 0){
		document.getElementById("noZero").disabled = true;
	}
	else{
		document.getElementById("noZero").disabled = false;
	}
	var pGestio = document.getElementById("despGestio");
	var dGestio = (1.2*nEntrada);
	dGestio = Math.round(dGestio*100)/100;
	pGestio.innerHTML = dGestio.toFixed(2) + " €";
	var total = document.getElementById("total");
	var totalEntrades = (15*nEntrada)+dGestio;
	total.innerHTML = totalEntrades.toFixed(2) + " €";

	document.cookie = "N=" + nEntrada;
	document.cookie = "C=" + dGestio.toFixed(2);
	document.cookie = "T=" + totalEntrades.toFixed(2);

}
function creaCookies(){
	document.cookie="N=";
	document.cookie="C=";
	document.cookie="T=";
}
