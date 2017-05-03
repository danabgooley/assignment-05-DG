


// call input from user
$("#city-type").val();

// store user input

var city = $("#city-type").val();
// recognize when user submits (on.click)
$("#submit-btn").click(changeCity);
// use event.preventDefault(); to prevent the page from reloading

// get first element from attribute ($.attr())



function changeCity() {
	event.preventDefault();
	$("#city-type").submit();


	if(city == "New York"|| city == "NYC" || city == "New York City").(function() {
		 $("body").attr(".nyc");

	});

	if(city == "San Francisco"|| city == "SF" || city == "Bay Area").(function() {
		 $("body").attr(".sf");
	});

	if(city == "Los Angeles"|| city == "LA" || city == "LAX").(function() {
		 $("body").attr(".la");
	});

	if(city == "Austin"|| city == "ATX").(function() {
		 $("body").attr(".austin");
	});

	if(city == "Sydney"|| city == "SYD").(function() {
		 $("body").attr(".sydney");
	});


}
// end of ready function

