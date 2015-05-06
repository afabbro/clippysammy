javascript:
(function(){
	// example starter event handler
	// document.body.onclick = function(event) {
	// 	console.log("clicky");
	// 	event = event || window.event;
	// 	var element = event.target || event.srcElement;
	// 	alert(element.textContent);
	// }	

	function displaySammy(helpMessages){
		// display sample donut until we have a sammy
		document.body.innerHTML += "<img src='http://37.media.tumblr.com/5462ca98ac502326aa20a82becba98b0/tumblr_mpexliKgpd1sn8q7mo1_500.png' style='position: fixed; right: 25px; top: 25px; z-index: 999999'>"
	};

	document.getElementById('ember371').onmouseover = function(event) {
		displaySammy();
	};

  document.getElementById('appendedInput').onblur = function(event){
    var dropName = document.getElementById('appendedInput').value;
  };
})()

 