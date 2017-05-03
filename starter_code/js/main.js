$(document).ready(function(){

	// recognize when user submits (on.click)
	$("#submit-btn").click(changeCity);
	// call input from user

	// store user input

	

	// use event.preventDefault(); to prevent the page from reloading

	// get first element from attribute ($.attr())

	function changeCity() {
		event.preventDefault();
		var city = $("#city-type").val();
		console.log("is this working?");
		if (city == "New York"|| city == "NYC" || city == "New York City") {
			 $("body").attr("class","nyc");
		} else if (city == "San Francisco"|| city == "SF" || city == "Bay Area") {
			 $("body").attr(".sf");
		} else if (city == "Los Angeles"|| city == "LA" || city == "LAX") {
			 $("body").attr(".la");
		} else if (city == "Austin"|| city == "ATX") {
			 $("body").attr(".austin");
		} else if (city == "Sydney"|| city == "SYD") {
			 $("body").attr(".sydney");
		}
	}

});
// end of ready function

