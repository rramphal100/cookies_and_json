$("#form").on("submit", function(e){
	e.preventDefault();
	$.ajax({
		type: "GET",
		url: "art-share.herokuapp.com",
		data: {
		q: search_term,
		type: search_type
		},
		success: function (response) {
			console.log(response);
			var artists = response.artists.items;
			for(var i=0; i<artists.length; i++){
				console.log(artists[i].name);
				document.getElementById("output").innerHTML+="<h1>"+artists[i].name+"</h1>";
				for(var j=0; j<artists[i].images.length; j++){
					console.log(artists[i].images[j].url);
					document.getElementById("output").innerHTML+="<img src='" + artists[i].images[j].url + "'>";
				}
			}
		}
	});
});