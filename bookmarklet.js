javascript:
(function(){
    var dropletName;
    var dropletSize;
    var dropletRegion;
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
                dropletName = document.getElementById('appendedInput').value;
                console.log('Droplet Name: '+dropletName);
        };
        // Detect Droplet size change

                document.getElementById('size').onclick = function(event){

                    var dropSizeVal = document.querySelector('input[name="droplet_create[size_id]"]:checked').value;
                    if (dropSizeVal == '66') {
                        //code
                        dropletSize = '512MB';
                    }
                    else if (dropSizeVal == '63') {
                        dropletSize = '1GB';
                    }
                    else if (dropSizeVal == '62') {
                        dropletSize = '2GB';
                    }
                    else if (dropSizeVal == '64') {
                        dropletSize = '4GB';
                    }
                    else if (dropSizeVal == '65') {
                        dropletSize = '8GB';
                    }
                    else if (dropSizeVal == '61') {
                        dropletSize = '16GB';
                    }
                    else if (dropSizeVal == '60') {
                        dropletSize = '32GB';
                    }
                    else if (dropSizeVal == '70') {
                        dropletSize = '48GB';
                    }
                    else if (dropSizeVal == '69') {
                        dropletSize = '64GB';
                    }
                    
                    console.log('Size Selected: '+dropletSize);
                    
                }
        
})()

 