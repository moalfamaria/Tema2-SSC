bass = new Audio('audio/bass.mp3');
hightom = new Audio('audio/hightom.mp3');
hihat = new Audio('audio/hihat.mp3');
tom = new Audio('audio/tom.mp3');
snare = new Audio('audio/snare.mp3');
crash = new Audio('audio/crash.mp3');
ride = new Audio('audio/ride.mp3');

var timer = 4;
var count = 0;
var beat = [];
var check = [];
var seconds;
var overtime = false;

function printTimer() {
	if (timer == 1) {
		document.getElementById('timer').innerHTML = "Asculta!";
		timer = timer - 1;
		setTimeout(printTimer, 1000);
	} else if (timer == 0) {
		document.getElementById('timer').innerHTML = "Se canta...";
		clearTimeout();
		train();
	} else {
		document.getElementById('timer').innerHTML = timer - 1;
		timer = timer - 1;
		setTimeout(printTimer, 1000);
	}
}

function clear() {
	document.getElementById('bass').className = "";
	document.getElementById('hihat').className = "";
	document.getElementById('hightom').className = "";
	document.getElementById('tom').className = "";
	document.getElementById('snare').className = "";
	document.getElementById('crash').className = "";
	document.getElementById('ride').className = "";
}

function checkScore() {
	clearTimeout();
	document.getElementById('seconds').style.display = "none";
	var i = 0, j = 0, points = 0, unnecessary = 0, rate;
	for (i = 0; i < check.length; i++) {
		if (check[i] == beat[j]) {
			points++;
			j++;
		} else {
			unnecessary++;
		}
	}

	document.getElementById('timer').style.display = "none";

	document.getElementById('check').style.display = "none";

	document.getElementById('points').style.display = "block";
	document.getElementById('points').innerHTML += points;
	document.getElementById('points').innerHTML += "/";
	document.getElementById('points').innerHTML += beat.length;

	document.getElementById('unnecessary').style.display = "block";
	document.getElementById('unnecessary').innerHTML += unnecessary;

	rate = (points * 100)/(beat.length + unnecessary);
	document.getElementById('rate').style.display = "block";
	document.getElementById('rate').innerHTML += parseFloat(Math.round(rate * 100) / 100).toFixed(2);;
	document.getElementById('rate').innerHTML += "%";

	if (overtime == false) {
		document.getElementById('overtime').innerHTML = "Timp Ramas: " + (seconds + 1) + " secunde";
	} else {
		if (seconds == -1) {
			document.getElementById('overtime').innerHTML = "Depasire Timp: " + Math.abs(seconds) + " secunda";
		} else {
			document.getElementById('overtime').innerHTML = "Depasire Timp: " + Math.abs(seconds) + " secunde";
		}
	}

	document.getElementById('refresh').style.display = "block";
}

function countdown() {
	if (seconds == 0) {
		document.getElementById('seconds').innerHTML = "Timp Ramas: 0:00";
		overtime = true;
	} else if (seconds > 0) {
		document.getElementById('seconds').innerHTML = "Timp Ramas: 0:0" + seconds;
	}
	seconds--;
	setTimeout(countdown, 1000);
}

function train() {
	check = [];
	var difficulty = document.getElementById('difficulty').value;
	var number;
	clear();
	if (difficulty == "easy") {
		if (count == 4) {
			document.getElementById('timer').innerHTML = "Incepe!";
			document.getElementById('check').style.display = "block";
			document.getElementById('seconds').style.display = "block";
			clearTimeout();
			seconds = 4;
			countdown(4);
		} else {
			number = Math.floor((Math.random() * 5) + 1);
			if (number == 1) {
				document.getElementById('bass').className = "playing";
				bass.pause();
    			bass.currentTime = 0;
    			bass.play();
    			beat[beat.length] = 'bass';
			} else if (number == 2) {
				document.getElementById('hihat').className = "playing";
				hihat.pause();
				hihat.currentTime = 0;
				hihat.play();
				beat[beat.length] = 'hihat';
			} else if (number == 3) {
				document.getElementById('hightom').className = "playing";
				hightom.pause();
				hightom.currentTime = 0;
				hightom.play();
				beat[beat.length] = 'hightom';
			} else if (number == 4) {
				document.getElementById('tom').className = "playing";
				tom.pause();
				tom.currentTime = 0;
				tom.play();
				beat[beat.length] = 'tom';
			} else if (number == 5) {
				document.getElementById('snare').className = "playing";
				snare.pause();
				snare.currentTime = 0;
				snare.play();
				beat[beat.length] = 'snare';
			}
			count = count + 1;
			setTimeout(train, 1000);
		}
	} else if (difficulty == "medium") {
		if (count == 6) {
			document.getElementById('timer').innerHTML = "Incepe!";
			document.getElementById('check').style.display = "block";
			document.getElementById('seconds').style.display = "block";
			clearTimeout();
			seconds = 6;
			countdown(6);
		} else {
			number = Math.floor((Math.random() * 6) + 1);
			if (number == 1) {
				document.getElementById('bass').className = "playing";
				bass.pause();
    			bass.currentTime = 0;
    			bass.play();
    			beat[beat.length] = 'bass';
			} else if (number == 2) {
				document.getElementById('hihat').className = "playing";
				hihat.pause();
				hihat.currentTime = 0;
				hihat.play();
				beat[beat.length] = 'hihat';
			} else if (number == 3) {
				document.getElementById('hightom').className = "playing";
				hightom.pause();
				hightom.currentTime = 0;
				hightom.play();
				beat[beat.length] = 'hightom';
			} else if (number == 4) {
				document.getElementById('tom').className = "playing";
				tom.pause();
				tom.currentTime = 0;
				tom.play();
				beat[beat.length] = 'tom';
			} else if (number == 5) {
				document.getElementById('snare').className = "playing";
				snare.pause();
				snare.currentTime = 0;
				snare.play();
				beat[beat.length] = 'snare';
			} else if (number == 6) {
				document.getElementById('crash').className = "playing";
				crash.pause();
				crash.currentTime = 0;
				crash.play();
				beat[beat.length] = 'crash';
			}
			count = count + 1;
			setTimeout(train, 1000);
		}
	} else if (difficulty == "hard") {
		if (count == 8) {
			document.getElementById('timer').innerHTML = "Incepe!";
			document.getElementById('check').style.display = "block";
			document.getElementById('seconds').style.display = "block";
			clearTimeout();
			seconds = 8;
			countdown(8);
		} else {
			number = Math.floor((Math.random() * 7) + 1);
			if (number == 1) {
				document.getElementById('bass').className = "playing";
				bass.pause();
    			bass.currentTime = 0;
    			bass.play();
    			beat[beat.length] = 'bass';
			} else if (number == 2) {
				document.getElementById('hihat').className = "playing";
				hihat.pause();
				hihat.currentTime = 0;
				hihat.play();
				beat[beat.length] = 'hihat';
			} else if (number == 3) {
				document.getElementById('hightom').className = "playing";
				hightom.pause();
				hightom.currentTime = 0;
				hightom.play();
				beat[beat.length] = 'hightom';
			} else if (number == 4) {
				document.getElementById('tom').className = "playing";
				tom.pause();
				tom.currentTime = 0;
				tom.play();
				beat[beat.length] = 'tom';
			} else if (number == 5) {
				document.getElementById('snare').className = "playing";
				snare.pause();
				snare.currentTime = 0;
				snare.play();
				beat[beat.length] = 'snare';
			} else if (number == 6) {
				document.getElementById('crash').className = "playing";
				crash.pause();
				crash.currentTime = 0;
				crash.play();
				beat[beat.length] = 'crash';
			} else if (number == 7) {
				document.getElementById('ride').className = "playing";
				ride.pause();
				ride.currentTime = 0;
				ride.play();
				beat[beat.length] = 'ride';
			}
			count = count + 1;
			setTimeout(train, 1000);
		}
	}
}

function start() {
	var difficulty = document.getElementById('difficulty').value;
	if (difficulty == "easy") {
		document.getElementById('crash').style.display = "none";
		document.getElementById('ride').style.display = "none";
		document.getElementById('hightom').style.top = "-20%";
	} else if (difficulty == "medium") {
		document.getElementById('ride').style.display = "none";
		document.getElementById('crash').style.display = "inline-block";
		document.getElementById('hightom').style.top = "-10%";
	} else if (difficulty == "hard") {
		document.getElementById('ride').style.display = "inline-block";
		document.getElementById('crash').style.display = "inline-block";
		document.getElementById('hightom').style.top = "-10%";
	}

	document.getElementById('timer').style.color = "royalblue";
	document.getElementById('timer').style.fontSize = "30px";
	document.getElementById('timer').style.textAlign = "center";
	printTimer();
}

function playDrum(drum) {
    if (drum == 'bass') {
    	bass.pause();
    	bass.currentTime = 0;
    	bass.play();
    	check[check.length] = 'bass';
    } else if (drum == 'hihat') {
        hihat.pause();
    	hihat.currentTime = 0;
    	hihat.play();
    	check[check.length] = 'hihat';
    } else if (drum == 'hightom') {
    	hightom.pause();
    	hightom.currentTime = 0;
    	hightom.play();
    	check[check.length] = 'hightom';
    } else if (drum == 'tom') {
    	tom.pause();
    	tom.currentTime = 0;
    	tom.play();
    	check[check.length] = 'tom';
    } else if (drum == 'snare') {
    	snare.pause();
    	snare.currentTime = 0;
    	snare.play();
    	check[check.length] = 'snare';
    } else if (drum == 'crash') {
    	crash.pause();
    	crash.currentTime = 0;
    	crash.play();
    	check[check.length] = 'crash';
    } else if (drum == 'ride') {
    	ride.pause();
    	ride.currentTime = 0;
    	ride.play();
    	check[check.length] = 'ride';
    }
}
