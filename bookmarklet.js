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

	document.getElementById('ember371').onmouseover = function (event) {
		alert("mouse'd over ? button");
	};

        document.getElementById('appendedInput').onblur = function(event){
                dropletName = document.getElementById('appendedInput').value;
        };
        // Detect Droplet size change
        var sizes = document.getElementsByName('droplet_create[size_id]');
        for (i = 0; i < sizes.length; i++) {
                this.onchange = function(event){
                    // Droplet size selection changed
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
                }
        }
})()

 