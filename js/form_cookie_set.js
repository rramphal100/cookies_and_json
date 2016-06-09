function validateForm(){
	var name = document.getElementById('name').value;
	Cookies.set("name", name);
	return false;
}