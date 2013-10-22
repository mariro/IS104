IS104 - Marius Redving Olsen
=====
OBS!!! Du kan finne LAB2 ved å se huke av LAB2 under branches.

Webapplikasjon for introduksjon av HTML/Java

proglangs.html - Hovedsiden for webapplikasjonen<br>
stil.css - Stilen til proglag.html<br>
proglang.js - Javascriptet til proglag.html<br>
lab3 0.html - Lab 3, oppgave 0<br>
lab3 1 og 2.html - Lab 3, oppgave 1 og 2<br>
Lab3.css - CSS filen til lab3 0.html og lab3 1 og 2.html<br>
Lab4-html - HTML Lab4<br>
Lab4.css - Stil til Lab4.html<br>


Kontrollspørsmåål LAB3

0) Fordelen med å bruke JQuery fremfor å lage alt fra bunn av på Javascript, er at man får en kortere kode.
JQuery kan gjøre det man med Javascript må bruke mange linjer på å ordne, i en. Dette fører til mindre tekst,
mindre sjanse for feil og en kortere læringskurve. Meningen med JQuery er å forenkle bruken av Javascript.

1)HTML, CSS og Canvas komplimenterer hverandre på forskjellige måter. HTML er kjent for å være innholdsdelen til en
side, og HTML gjør det enkelt å legge til diverse stiler på tekst. I CSS kan du igjen definere hvordan disse stilene
skal være, samtidig bruker man CSS til å definere tings om bakgrunn. HTML og CSS sterke sider er derfor å få tekst
til å se ut som man vil, og samtidig slippe å legge til denne stilen hver gang man skal skrive noe.

Canvas kan også gjøre noe av dette, men det ville krevd mer plass, og hadde også fått noe mindre struktur enn hva mar
har i CSS. Man kan tenke på Canvas som et tredje lag i en side, der HTML og CSS står for innhold å stil ,kan Canvas
gjøre siden mer dynamisk. Gode eksempler på dette er f.eks bilder man kan trykke på, vil bli stort, men ikke åpne
en ny side. Eller man har et ord som trenger nærmere forklaring, da kan man holde musen over, og få opp et vindu der
man har en forklaring på ordet. Canvas kan derfor lage elementer som er over hjemmesiden, uten at man må laste noe på
nytt.

2)Canvas representerer det vi kaller Rastegrafikk, eller Bitmap på engelsk. Det vil si at man definerer fargen for hver
enkelt pixel man har på skjermen. 





Kontrollspørsmål LAB1

0) Javascript har flere funksjoner, men i hovedsak brukes den til å skape en dynamisk side.
Det vil si at Javascript har mulighet til å lagre informasjon, som du ikke ser, uten å begå en handling.
Da får man følelsen av at siden endrer seg når man begår denne handlinger, til tross for at infromasjonen
var det fra starten av, den var bare lastet inn i forveien. 

På lik linje med CSS kan også Javascript brukes til å forenkle endringer. For eksempel om man har en Variabel man
ønsker å ha på flere steder på siden sin, denne variablen kan vi for eksempel si at den regner ut renter, basert
på en fast rente. Denne har du på flere sider, og hvis renten da endrer seg, så kan du bare skifte ut ett tall
istedet for å manuelt måtte gå inn i HTML filen å endre innad i den.

1) ID Bruker man om man har et enkelt element av denne formen på siden sin, eksempelvis en menybar.
Denne menybaren vil være unik for siden, og ikke oppstå flere plasser. Du kan med andre ord bare ha EN
av samme ID i en HTML fil.

Class bruker man for noe som går igjen på siden. Et element du har flere av. Eksempelvis overskrifter. Du har
åpenbart mange overskrifter rundt om på siden din, og da kan du definere disse ved class.

2) Om listen var særdeles lang ville en liste lik den i Oppgave 0 være ganske tungvindt.
Man hadde blitt tvunget til å bla mye for å finne frem til det man ønsket. Dette kan løses på
langt bedre måter. Å ha en Rullegardin liste er ikke nødvendigvis perfekt, men det kan gjøre det noe enklere
om vedkommende besitter noe datakunnskaper. Skulle man bla ned til P, kunne man istedet trykket P på tastaturet,
også kommet rett ned til den bokstaven. Dette ser vi ofte f.eks når du skal  velge språk. Fordelen med rullegardin
er at den tar liten plass, og det er derfor enkelt å putte den imellom andre former som skal fylles ut.

3) Her ser det ut til at det er brukt en vanlig <LI> tag, men en CSS fil som har en float-left regel med maks 3
elementer på hver linje. For å gjøre navigering noe enklere er det også lagt opp til linker som hopper nedover på
slik at man enkelt kan komme til sin ønsket boksav uten å måtte bla for mye

4) En <span> tag er en såkalt inline tag, det vil si en tag man kan bruke midt i en setning, for eksempel 
<span>denne</span> setningen. En <div> tag er hva man kaller en blocktag. Det er mer en tag man kan skrive en lengre
tekst inni, for eksempel kunne hele dette avsnittet vært i en div tag. Man kan ikke bruke det midt i en setning, fordi
en <div> tag automatisk lager linjeskift.

5) Om listen blir for lang, vil det likevel være vanskelig å finne frem til riktig element. Samtidig vil listen
rullegardinen være vanskelig å type, siden den blir lang med mye tekst, og da er det plutselig ikke lett å finne frem
uten å måtte konsentrere seg og lete litt.

Som alternativ løsning kan man hatt en søkeboks, der man skrive, også får man forslag mens man skriver. Likt det
systemet som er når du søker på www.google.com. Den vil hele tiden foreslå nye ting så lenge du skriver. Dvs om du
skriver inn P vil alle alternativene på P vises i en dropdown meny under søkefeltet, og fortsetter du med PR, vil alle
som begynnre på PR vises. Dette forutsetter selvfølgelig at du vet hva du leter etter.
