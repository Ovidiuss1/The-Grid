//var div = $("<div>", {class: "ugrid"});
//var row = $("<div>", {class: "row"});

//declar variabile globale. le pun la 0.
var x = null;
var y = null;

$( document ).ready(function() {


/*$(".change").on("click", function(){
//schimbam valoarea variabilelor globale ,dandule valorile care le alege user-ul
$(".grid").empty();
x = parseInt(prompt("Enter a Number between 1 and 40", "1"), 10);
y = parseInt(prompt("Enter a number between 1 and 40", "1"), 10);
});*/
	
//---------------------------------------------------------------------------//
//folosim 2 for loops pentru a calcula RANDURILE si PATRATELELE din randuri
//folosindune de datele date de user.De asemenea creem acele randuri si patratele.


	$(".change").on("click", function(){
	$(".grid").empty();
	x = parseInt(prompt("Enter a Number between 1 and 40", "1"), 10);
	y = parseInt(prompt("Enter a number between 1 and 40", "1"), 10);
	for(var i = 0;i<x;i++){
	
    	$(".grid").append('<div class="row"> </div>');
    }

	for(var i = 0;i<y;i++){
	
		$(".row").append('<div class="ugrid"> </div>');
}



$(".ugrid").on("mouseenter", function(){
	$(this).addClass("newgrid");
});
});
//-------------------------------------------------------------------//
//o functie simpla pentru butonul de clea. Face exact ce te astepti.
//RANDURILE . Asta inseamna ca implicit curata
$(".clear").on("click", function(){
	$(".ugrid").removeClass("newgrid");
	
});


$(".fade").on("click", function(){
$(".grid").empty();
	x = parseInt(prompt("Enter a Number between 1 and 40", "1"), 10);
	y = parseInt(prompt("Enter a number between 1 and 40", "1"), 10);

	
	for(var i = 0;i<x;i++){
	
    	$(".grid").append('<div class="row"> </div>');
    }

	for(var i = 0;i<y;i++){
	
		$(".row").append('<div class="ugrid2"> </div>');
}
$(".ugrid2").on("mouseenter", function(){
	$(this).addClass("newgrid");
	$(this).fadeTo("fast",0);
			$(this).mouseleave(function(){
				$(this).fadeTo("fast",1);
			});
});

});

});
//});

/*Miercuri : okey okey okey OKEYYYYY ! we gud. am reusit sa face gridul mai
dinamic . Se comporta corespunzator. Butoanele fac ceea ce trebuie. Width-ul
de la .grid este la fel de dinamic. okeokeokeokey. 
Ceea ce trebuie facut azi(joi) este :
1.Sa folosesc addClass() pentru a schimba 
culoarea la grid. Nu cred ca va fi prea complicat .sper.
2. Sa limitam alegerile. Adica sa punem o limita. Cred ca un 35 ar fi ok. Poate mai mult
daca schimb marimea patratlelelor(.ugrid). okokokookokook.
PS . NU INCAPT MAI MULT DE 22 DE PATRATELE PE RAND. FIX DAT SHIT
*/