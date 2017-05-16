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
	});
	$('#char1').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
	});

	$('#char2').mouseover(function() {
		$("#char11").hide();
		$("#char22").show();
		$("#char33").hide();
		$("#char44").hide();
	});
	$('#char2').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
	});	$('#char3').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").show();
		$("#char44").hide();
	});
	$('#char3').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
	});	
	$('#char4').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
	});
	$('#char4').mouseout(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
	});





})



