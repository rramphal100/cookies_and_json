$(document).ready(function(){
	var name = Cookies.get("name");
	if(name){
		alert("Your name is " + name + "!");
		$("#info").css({color: blue}, 2000);
	}
	else {
		alert("Cookie's value was not set! You need to fill out the form first!");
	}
});