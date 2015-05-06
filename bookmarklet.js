javascript:
(function(){
	// example starter event handler
	// document.body.onclick = function(event) {
	// 	console.log("clicky");
	// 	event = event || window.event;
	// 	var element = event.target || event.srcElement;
	// 	alert(element.textContent);
	// }	

	var helpButton = document.getElementById('ember371');
	helpButton.onmouseover = function (event) {
		event = event || window.event;
		var element = event.target || event.srcElement;
		alert("mouse'd over ? button");
	};

})()

 