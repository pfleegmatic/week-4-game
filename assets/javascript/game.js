///list global variables
console.log("start this javascript");

///player's total at start of each time.
var addedup = 0;
///scoreboard at the start
var wins=0;
var losses=0;

///computer picks number from 19-120. computer's 120 is 119.
console.log("before 1st round");
var randomnumber = Math.floor((Math.random() * 100)+19 );
///each crystal has random value of 1-12.Assign a var to each crystal.
var red = Math.floor((Math.random()*12)+1);
var blue = Math.floor((Math.random()*12)+1);
var yellow = Math.floor((Math.random()*12)+1);
var green = Math.floor((Math.random()*12)+1);

///the audio for win and lose
console.log("hear audio?");
var winaudio = new Audio("assets/audio/crowdhomerunapplause.mp3"); 
var loseaudio = new Audio("assets/audio/crowd-groan.mp3");


//update status on html
var updateadd = function(){
	console.log("html updating w/updated add?");
	$('.addedup').empty(); //empty() method removes all child nodes and content from the selected elements.
	$('.addedup').append(addedup); //method inserts specified content at the end of the selected elements.
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

///Restart will use most starting global variables above; stored in 1 function.
///As though creating a cooking recipe for a dish called gamerestart.
var gamerestart = function(){
	console.log("subesequent rounds");
	///Want to reset player's score total.
	addedup = 0;
	///Do not want to reset the scoreboard, so leave wins and losses alone.
	/// Repeat, another random number 19-120 will be chosen by computer and crystals are reassigned numbers 1-12.
	randomnumber = Math.floor((Math.random()*100)+19 );
		$('#randomnumber').empty();
		$('#randomnumber').append(randomnumber);
	///each crystal has random value of 1-12.Assign a var to each crystal.
	red = Math.floor((Math.random()*12)+1);
	blue = Math.floor((Math.random()*12)+1);
	yellow = Math.floor((Math.random()*12)+1);
	green = Math.floor((Math.random()*12)+1);
	updateadd(); //updateadd function needs to be before gamerestart

}//closes game restart


//if wins or lose
var gamesequence = function(){
console.log("are we there yet?");

if(addedup===randomnumber){
	wins = wins +1;
	winaudio.play();
	console.log("did wins add up?");
	///restart the game: reset playerscore to 0, get another randomnumber, get each crsytal to choose another number
	console.log("did winner go to restart?");
	gamerestart(); //create this function and place before gamesequence
	

}else if(addedup > randomnumber){
 	losses = losses +1;
 	console.log("did the losses add up?");
 	loseaudio.play();
 	
	///restart the game. 
	console.log("did loser go to restart?");
	gamerestart();

}else{
/////no other option. keeps adding the playerscore if player is below target randomnnumber. 
	console.log("player score updating?");
	updateadd(); //create this function and place before gamesequence

}

}//closes gamesequence function
console.log("player score updating on html?");
$('#randomnumber').append(randomnumber);
$('.addedup').append(addedup);

 
$(document).ready(function(){

	///Click events ended up at the end since gameseqence is referenced and should be defined prior.

	console.log("click crystals");

	$('#red').click(function(){
		addedup = addedup + red;
		gamesequence();
	})

	$('#blue').click(function(){
		addedup = addedup + blue;
		gamesequence();
	})

	$('#yellow').click(function(){
		addedup = addedup + yellow;
		gamesequence();
	})

	$('#green').click(function(){
		addedup = addedup + green;
		gamesequence();
	})


});//close of click events






 ///// how to avoid taking the long way around to get the native dom element. 




