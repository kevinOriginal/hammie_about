$(document).ready(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop() > 500){
			$("#shop-position").show();
		}
		else{
			$("#shop-position").hide();
		}



	});

	// Initialize
	$("#char22").hide();
	$("#char33").hide();
	$("#char44").hide();

	//이걸 맨 처음 달아줘야 처음키면 팔 두개가 안보임 ^^  안그러면 팔 3개있는 기형 나옴 ㅜ
	$('#shop-mouseover').hide();

	//이건 스크롤 밖으로 빼줘야지 ㅎㅎ
	$('#shop-position').mouseover(function() {
		// 안에 함수 show hide 반대로 써놓음, 심지허 html에 오타있더라
		$('#shop-mouseover').show();
		$('#shop-mouseout').hide();
	});

	$('#shop-position').mouseout(function() {
		$('#shop-mouseover').hide();
		$('#shop-mouseout').show();
	});

	// Char 1
	// bootstrap hover effect 랑 제이쿼리랑 충돌나서 안됐었음 그래서 부트스트랩 허버 뺐음
	// 제이쿼리에 css코드 추가함
	// 나중에 시간나면 이렇게말고 함수형으로 리팩토링해보세요~ 너무 코드가 길다
	// 밥 비싼걸로 사줘야함
	$('#char1').mouseover(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("#char2").css({ opacity: 0.5 });
		$("#char3").css({ opacity: 0.5 });
		$("#char4").css({ opacity: 0.5 });
	});

	$('#char1').mouseout(function() {
		$("#char11").show();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").hide();
		$("#char1").css({ opacity: 1 });
		$("#char2").css({ opacity: 1 });
		$("#char3").css({ opacity: 1 });
		$("#char4").css({ opacity: 1 });
	});

	// Char 2
	$('#char2').mouseover(function() {
		$("#char11").hide();
		$("#char22").show();
		$("#char33").hide();
		$("#char44").hide();
		$("#char1").css({ opacity: 0.5 });
		$("#char3").css({ opacity: 0.5 });
		$("#char4").css({ opacity: 0.5 });
	});

	$('#char2').mouseout(function() {
		$("#char11").hide();
		$("#char22").show();
		$("#char33").hide();
		$("#char44").hide();
		$("#char1").css({ opacity: 1 });
		$("#char2").css({ opacity: 1 });
		$("#char3").css({ opacity: 1 });
		$("#char4").css({ opacity: 1 });
	});

	// Char 3
	$('#char3').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").show();
		$("#char44").hide();
		$("#char1").css({ opacity: 0.5 });
		$("#char2").css({ opacity: 0.5 });
		$("#char4").css({ opacity: 0.5 });
	});

	$('#char3').mouseout(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").show();
		$("#char44").hide();
		$("#char1").css({ opacity: 1 });
		$("#char2").css({ opacity: 1 });
		$("#char3").css({ opacity: 1 });
		$("#char4").css({ opacity: 1 });
	});

	// Char 4
	$('#char4').mouseover(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
		$("#char1").css({ opacity: 0.5 });
		$("#char2").css({ opacity: 0.5 });
		$("#char3").css({ opacity: 0.5 });
	});

	$('#char4').mouseout(function() {
		$("#char11").hide();
		$("#char22").hide();
		$("#char33").hide();
		$("#char44").show();
		$("#char1").css({ opacity: 1 });
		$("#char2").css({ opacity: 1 });
		$("#char3").css({ opacity: 1 });
		$("#char4").css({ opacity: 1 });
	});
})
