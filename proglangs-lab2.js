function Skifttekst(selectobj){

 var	e_sprak = document.getElementById("sprak");
 var	e_skriv = document.getElementById("skriv");
		e_skriv.innerHTML = "Du har nå valgt " + e_sprak.options[selectobj.selectedIndex].text;
 
}

function sjekk(){
	var sokField = document.getElementById('sok');
	if(sokField.value != "")
		alert("Dette er bare en test, du søkte etter: " + sokField.value)
	else
		alert("Du har ikke skrevet inn noe")		
}

function Konstruksjon() {

	alert("Beklager, denne siden er under konstruksjon")
	
	}
