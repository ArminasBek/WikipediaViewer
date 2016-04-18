$(document).ready(function(){
	$("input#text").focus();
})

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
			$("div#container").append("<a target='_blank' href='" + itemLink[i] + "'><div class='item'><span class='itemName'>" + itemName[i] + "</span>" + " " + itemDescription[i] + "</div></a>");
		}
		})//EOF getJSON
	$("input#text").val("").focus();
});//EOF button click
		
	




