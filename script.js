// In the code below we add and memorise the word.
	var word, answerArray = [""], remainingLetters, lives = 4;
	function addWord() {
		word = $('#addWord').val();
		remainingLetters = word.length;
		var p, letter, button, holder;
		holder = document.getElementById( "buttonsHolder" );
		for ( var i = 97; i <= 122; ++i ) {
			if ( i == 97) {
				p = document.createElement("p");
			}
			letter = String.fromCharCode( i );
			button = document.createElement("button");
			button.innerHTML = letter;
			button.setAttribute( "data-letter", letter );
			button.onclick = function(e) { pickLetter(this.getAttribute("data-letter")); };
			p.appendChild(button);
			if (i == 106) {
				holder.appendChild(p);
			}
		}
		for (var i = 0; i < word.length; ++i) {
	    	answerArray[i] = '_';
	    }
	    alert(answerArray);
	    return false;
	}
	//Here we pick the letter from the alphabet and compare it with the word and also show how many letters are left and if you guessed it or not.
	function pickLetter(letter) {
		var guessed = 0, lettersPickd;
		if (remainingLetters > 0 && lives > 0) {
			for (var i = 0; i < word.length; ++i) {
				if (word[i] == letter && answerArray[i] != letter) {
					answerArray[i] = letter;
					alert(answerArray);
					--remainingLetters;
					guessed = 1;
				}
			}
			$('#lettersPickedList').append(`<button class="btn btn-danger">` + letter + `</button>`);
		}
		if (guessed == 0) {
			--lives;
			if (lives > 0) {
				alert("Nu ai ghicit litera, mai incearca! Vieti ramase " + lives);
			}
		}
		if (lives < 1 && remainingLetters > 0) {
			alert("Ai pierdut");
		}else if (remainingLetters < 1 && lives > 0) {
			alert("Felicitari, ai castigat!")
		} 
		return false;	
	}
