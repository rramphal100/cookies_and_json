function validateForm(){
	var name = document.getElementById('username').value();
	Cookies.set("name", name);
	return false;
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
			var artists = response.artists.items;
			for(var i=0; i<artists.length; i++){
				console.log(artists[i].name);
				for(var j=0; j<artists[i].images.length; j++){
					console.log(artists[i].images[j].url);
					document.getElementById("output").innerHTML+="<img src='" + artists[i].images[j].url + "'>";
				}
			}

		}
	});
});