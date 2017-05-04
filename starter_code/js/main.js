$(document).ready(function(){

	// recognize when user submits 
	$("#submit-btn").click(changeCity);
	//run function changeCity
	function changeCity() {
		// use event.preventDefault(); to prevent the page from reloading
		event.preventDefault();
		// store user input
		var city = $("#city-type").val();
		// change input to all lowercase letters 
		city = $("#city-type").val().toLowerCase();
		// display different background based on user input
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
	}

});


