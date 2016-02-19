
var x = null;
var y = null;

$( document ).ready(function() {




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

$(".clear").on("click", function(){
	$(".ugrid").removeClass("newgrid");
	
});


$(".fade").on("click", function(){
$(".grid").empty();
	x = parseInt(prompt("Enter a number (max 70).", "1"), 10);
	y = parseInt(prompt("Enter a number (max 70).", "1"), 10);

	
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
