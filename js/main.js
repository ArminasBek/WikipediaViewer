$(document).ready(function(){
	//focus on input on page load.
	$("input#text").focus();
})
//get three different arrays from API, cycle through them and append it on button click.
$("button#search").on("click", function(){
	$("div#container").empty();
	var inputVal = $("input#text").val();
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal +"&limit=5&namespace=0&format=json&callback=?", function(json) {
		var itemName = $.each(json[1], function(i, val){	
		})
		var itemDescription = $.each(json[2], function(i, val){	
		})
		var itemLink = $.each(json[3], function(i, val){
		})
		for (var i=0; i <itemName.length; i++) {
			$("div#container").append("<a target='_blank' href='" + itemLink[i] + "'><div class='item'><p><span class='itemName'>" + itemName[i] + "</span></p><p>" + " " + itemDescription[i] + "</p></div></a>");
		}
		})//EOF getJSON
	//empty input field and keep focus.
	$("input#text").val("").focus();
});//EOF button click.
		
	




