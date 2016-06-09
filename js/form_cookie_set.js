function validateForm(){
	var name = document.getElementById('username').value();
	Cookies.set("name", name);
}

$("#form").on("submit", function(e){
	e.preventDefault();
	var search_term = document.getElementById("term").value;
	var search_type = document.getElementById("type").value;
	alert(search_term+" "+search_type);
	var returned = $.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/search",
		data: {
		q: search_term,
		type: search_type
		},
		success: function (response) {
			console.log(response);
			var data = JSON.parse(response);
			document.getElementById("output").innerHTML="";
			for(var i=0; i<data.artists.length; i++){
				for(var j=0; j<data.artists[i].items.length; j++){
					console.log(data.artists[i].items);
					for(var k=0; k<data.artists[i].items[j].images.length; k++){
						console.log(data.artists[i].items[j].images);
						document.getElementById("output").innerHTML += "<img src='" + response.artists[i].items[j].images[k].url + "'>";
					}
				}
			}
		}
	});
	return false;
});