	var compChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	var wins = 0;
	var losses = 0;
	var guesses_left = 9;	
	var guessesSoFar = [];



	document.onkeyup = function(event) {

	document.getElementById("wins").value =wins;
	document.getElementById("losses").value =losses;
	document.getElementById("guesses_left").value =guesses_left;
 	
	
 		var userInput = event.key;
 		var computerPicked = compChoices[Math.floor(Math.random() * compChoices.length)];
 		//guessesSoFar.push(userInput);
		console.log("userInput =" + userInput);
		console.log("compRandom = " + computerPicked);
		

		if(userInput === computerPicked)
		{
			wins++;
			guesses_left = 9 ;
			guessesSoFar = [];
			document.getElementById("wins").value =wins;
			document.getElementById("guesses_left").value =guesses_left;
			
			//document.getElementById("guessesSoFar").innerHTML = guessesSoFar.toString();
			
		}

		else {
			guesses_left--;
			guessesSoFar.push(userInput);

			document.getElementById("guesses_left").value =guesses_left;
			console.log("guessesSofar", guessesSoFar);
			document.getElementById("guessesSoFar").value = guessesSoFar.toString();
			if(guesses_left ===0)
 			{	guesses_left = 9 ;
 				losses++;
  	  			guessesSoFar = [];
  	  			document.getElementById("losses").value =losses;
  	  			document.getElementById("guesses_left").value =guesses_left;
				
 		}
		
		}
 	
}
