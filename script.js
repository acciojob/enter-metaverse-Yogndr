//your JS code here. If required.
function Change(){
	let elem=document.getElementById('status');
	let content=elem.textContent;

	let h1element=document.createElement('h1');
	h1element.textContent=content;

	elem.replaceWith(h1element);
	
}