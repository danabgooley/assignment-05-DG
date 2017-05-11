$(document).ready(function(){

	function changeCity() {
// // create an array
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
// //use the forEach function to add them to the select menu
// On selection, change background
$("select").change(function() {
// get the value of user selection
var city = $("#city-type").val();
// use conditionals
if (city == "NYC") {
			 $("body").attr("class","nyc");
		} else if (city == "SF") {
			 $("body").attr("class","sf");
		} else if (city =="LA") {
			 $("body").attr("class","la");
		} else if (city == "ATX") {
			 $("body").attr("class","austin");
		} else if (city == "SYD") {
			 $("body").attr("class","sydney");
		}
});
// ????
	cities.forEach(function(element) {
		$("select").append("<option>" + element + "</option>");
	})



});
 


