$(document).ready(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop() > 500){
			$("#shop-position").show();
		}
		else{
			$("#shop-position").hide();	
		}

	});
	



	$("#char22").hide();
	$("#char33").hide();
	$("#char44").hide();

	$('#char1').mouseover(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("img[id=img-22]").attr("src", "images/Char4.png");
		$("img[id=img-33]").attr("src", "images/Char4.png");
		$("img[id=img-44]").attr("src", "images/Char4.png");
			
	});
	$('#char1').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("img[id=img-22]").attr("src", "images/Char2.png");
		$("img[id=img-33]").attr("src", "images/Char2.png");
		$("img[id=img-44]").attr("src", "images/Char2.png");
			
	});

	$('#char2').mouseover(function() {
		$("#char11").hide();
		$("#char22").show();
		$("#char33").hide();
		$("#char44").hide();
		$("img[id=img-11]").attr("src", "images/Char3.png");
		$("img[id=img-33]").attr("src", "images/Char3.png");
		$("img[id=img-44]").attr("src", "images/Char3.png");
	});
	$('#char2').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("img[id=img-11]").attr("src", "images/Char3.png");
		$("img[id=img-33]").attr("src", "images/Char3.png");
		$("img[id=img-44]").attr("src", "images/Char3.png");
			
	});	$('#char3').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").show();
		$("#char44").hide();
		$("img[id=img-11]").attr("src", "images/Char4.png");
		$("img[id=img-22]").attr("src", "images/Char4.png");
		$("img[id=img-44]").attr("src", "images/Char4.png");
	});
	$('#char3').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("img[id=img-11]").attr("src", "images/Char4.png");
		$("img[id=img-22]").attr("src", "images/Char4.png");
		$("img[id=img-44]").attr("src", "images/Char4.png");	
	});	
	$('#char4').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
		$("img[id=img-11]").attr("src", "images/Char2.png");
		$("img[id=img-22]").attr("src", "images/Char2.png");
		$("img[id=img-33]").attr("src", "images/Char2.png");
	});
	$('#char4').mouseout(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
		$("img[id=img-11]").attr("src", "images/Char2.png");
		$("img[id=img-22]").attr("src", "images/Char2.png");
		$("img[id=img-33]").attr("src", "images/Char2.png");
	});





})



