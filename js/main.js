$("button#search").on("click", function(){
	var inputVal = $("input#text").val();
	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal +"&limit=5&namespace=0&format=json&callback=?", function(json) {
		console.log(json);
		$("input#text").val('');
	})	
});
		
	
	





