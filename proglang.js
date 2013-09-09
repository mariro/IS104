function Skifttekst(selectobj){

 var e_språk = document.getElementById("språk");
 var e_skriv = document.getElementById("skriv");
	e_skriv.innerHTML = "Du har nå valgt " + e_språk.options[selectobj.selectedIndex].text;
 
}
