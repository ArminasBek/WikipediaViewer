$("button#search").on("click", function(){
	var inputVal = $("input#text").val();
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal +"&limit=5&namespace=0&format=json&callback=?", function(json) {
		var itemName = $.each(json[1], function(i, val){	
		})
		var itemDescription = $.each(json[2], function(i, val){	
		})
		var itemLink = $.each(json[3], function(i, val){
		})
		console.log(itemName[0] + " " + itemDescription[0] + " " + itemLink[0]);
		console.log(itemName[1] + " " + itemDescription[1] + " " + itemLink[1]);
		console.log(itemName[2] + " " + itemDescription[2] + " " + itemLink[2]);
		console.log(itemName[3] + " " + itemDescription[3] + " " + itemLink[3]);
		console.log(itemName[4] + " " + itemDescription[4] + " " + itemLink[4]);
		

		})//EOF getJSON
});//EOF button click
		
	




