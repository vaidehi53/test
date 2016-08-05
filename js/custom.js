
$(document).ready(function(){
	//alert("sfdf");	
	var viewportwidth = $(window).width();
	var viewportheight = $(window).height();
	$(".bg-main").width(viewportwidth);
	$(".bg-main").height(viewportheight);

	$(window).resize(function(){
		//alert("sd");
		var viewportwidth = $(window).width();
		var viewportheight = $(window).height();
		$(".bg-main").width(viewportwidth);
		$(".bg-main").height(viewportheight);
	});

	$('.bxslider').bxSlider();

});

var app = angular.module('myapp', []);

app.controller('mycontrol', function($scope){
//	var chairs =["Office chairs", "Kids chairs", "Woods chairs"];
// 	$scope.chairs=chairs;
	
	var box = [{id:1, title:"Office chairs", data: ".ul1"},
			   {id:2, title:"Kids chairs", data: ".ul2"},
			   {id:3, title:"Woods chairs", data: ".ul3"}
			   ];
	$scope.box=box;
	$scope.color = 'green';

});

app.run(function($rootScope){
				 $rootScope.color = 'blue';
});

app.controller('myCtrl', function($scope, $location){
												$scope.myUrl = $location.absUrl();			 
															 });


$(document).ready(function(){

	$(".cats ul").hide();
	$("select.div-toggle").on('change', function(){
												 	debugger;

		var target = $(this).data("target");
		var show = $("option:selected").data("show");
		$(".cats").children().hide();
		$(show).show();
		
	});

}); 




















