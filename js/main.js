function hideSideBar() {
	var e = document.getElementById('landing');
	
	if(e.style.display == 'block')
		e.style.display = 'none';
	else 
		e.style.display = 'block';
}