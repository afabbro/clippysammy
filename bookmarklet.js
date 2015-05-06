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

	function displaySammy(helpMessageIdentifier){
		// display sample donut until we have a sammy
    var helpMessage = [];
    var sammyImgUrl;

    if (helpMessageIdentifier == 0) {
    	helpMessage[0] = "It looks like you're trying to set up Wordpress on a 512mb droplet";
    	helpMessage[1] = "Set up Wordpress on a 1gb droplet";
    	helpMessage[2] = "I am a monster and don't care";
    	helpMessage[3] = "#YOLO";
    	sammyImgUrl = "";
    } else if (helpMessageIdentifier === 1) {
    	helpMessage[0] = "It looks like you're trying to ask for help, why don't you talk to me?";
    	helpMessage[1] = "Continue contacting customer support";
    	helpMessage[2] = "Feel guilty for snubbing a cartoon shark";
    	helpMessage[3] = "Answer my question already!";
    	sammyImgUrl = "";
    } else if (helpMessageIdentifier === 2) { 
    	helpMessage[0] = "It looks like you are trying to create a very large droplet";
    	helpMessage[1] = "I've got money to burn";
    	helpMessage[2] = "Not my credit card";
    	helpMessage[3] = "MAKE IT RAIIIIN";
    	sammyImgUrl = "";
    } else if (helpMessageIdentifier === 3) {
    	helpMessage[0] = "It looks like you are trying to give DigitalOcean feedback, would you like to tell me your ~feelings~?";
    	helpMessage[1] = "Yes please I have many feelings";
    	helpMessage[2] = "I am a robot/Not Applicable";
    	helpMessage[3] = "Express Self";
    	sammyImgUrl = "";
    } else if (helpMessageIdentifier === 4) {
    	helpMessage[0] = "It looks like you are trying to use a distribution that is totally badass";
    	helpMessage[1] = "Yeah obviously";
    	helpMessage[2] = "What's it to you?";
    	helpMessage[3] = "But it's not Linux";
    	sammyImgUrl = "";
    }

    helpMessage[0] = "It looks like you're trying to set up Wordpress on a 512mb droplet";
		var helpMessageHTML = 
		if (true) {};
		"<div id='helpMessageHTML' style='position: fixed; left: 30px; background: yellow; border-radius: 5px; border: 1px solid black;'>"
		+ "<div id='question'>" + helpMessage[0] + "</div>"
		+ "<div id='option1'>" + helpMessage[1] + "</div>"
		+ "<div id='option2'>" + helpMessage[2] + "</div>"
		+ "<button>" + helpMessage[3] + "</button>";

		var sammyImgTag = "<img src='" + sammyImgUrl + "' style='position: fixed; right: 25px; top: 25px; z-index: 999999;'>";
		var finalHTML = helpMessageHTML + sammyImgTag;
		document.body.innerHTML += finalHTML;
	};
        
  function checkStatus(){
    /* Function called from other event handlers to check for conditions to show sammy */

  };

	document.getElementById('ember371').onmouseover = function(event) {
		displaySammy();
	};

	document.getElementById('appendedInput').onblur = function(event){
	dropletName = document.getElementById('appendedInput').value;
	console.log('Droplet Name: '+dropletName);
	};
	/* Detect Droplet size change */

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
	    
	};

	// lolol we could have been using jQuery all along lol what

	$('#regions').click(function(){
	    if ($('#region-nyc').hasClass("selected")) {
	        if (dropletRegion != 'NYC') {
	            console.log('NYC');
	            dropletRegion = 'NYC';
	        }
	        
	    }
	   else if ($('#region-sfo').hasClass("selected")) {
	        if (dropletRegion != 'SFO') {
	            console.log('SFO');
	            dropletRegion = 'SFO';
	        }
	    }
	   else if ($('#region-sgp').hasClass("selected")) {
	        if (dropletRegion != 'SGP') {
	            console.log('SGP');
	            dropletRegion = 'SGP';
	        }
	    }
	   else if ($('#region-lon').hasClass("selected")) {
	        console.log('LON Selected');
	        dropletRegion = 'LON';
	    }
	   else if ($('#region-ams').hasClass("selected")) {
	        if (dropletRegion != 'AMS') {
	            console.log('AMS');
	            dropletRegion = 'AMS';
	        }
	    }

	   else if ($('#region-fra').hasClass("selected")) {
	        if (dropletRegion != 'FRA') {
	            console.log('FRA');
	            dropletRegion = 'FRA';
	        }
	    }

	});

})()

 