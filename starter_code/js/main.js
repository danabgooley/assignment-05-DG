$(document).ready(function(){

	function changeCity() {
// // create an array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
// //use the forEach function to add them to the select menu
// On selection, change background
$("select").change(function() {
var city = $("#city-type").val();

if (city == "new york"|| city == "nyc" || city == "new york city") {
			 $("body").attr("class","nyc");
		} else if (city == "san francisco"|| city == "sf" || city == "bay area") {
			 $("body").attr("class","sf");
		} else if (city == "los angeles"|| city == "la" || city == "lax") {
			 $("body").attr("class","la");
		} else if (city == "austin"|| city == "atx") {
			 $("body").attr("class","austin");
		} else if (city == "sydney"|| city == "syd") {
			 $("body").attr("class","sydney");
		}
});

	cities.forEach(function(element) {
		$("select").append("<option>" + element + "</option>");
	})



});
 


