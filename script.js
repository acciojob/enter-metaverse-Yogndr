//your JS code here. If required.
function Change(){
	event.preventDefault();
	let elem=document.getElementById('status');
	

	let h1element=document.createElement('h1');
	h1element.textContent="Entered Metaverse";

	elem.replaceWith(h1element);
	
}