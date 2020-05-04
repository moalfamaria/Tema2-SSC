/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  
function main(params) {
//	return { message: 'Hello World' };
	 // return string.charAt(0).toUpperCase() + string.slice(1);
}*/

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function main(msg){
	var name1 = ["fluffy", "successfull", "atypical", "mysterious", "graceful", "magical", "weird", "poorly drawn", 
                                "vengeful", "obedient", "fake", "heartbreaking","dissapointing","lucky", "emotionless"];

	var name2 = 
["Bob", "stormtrooper", "chicken", "plantlover", "chair", "donot", "lamp", "tortoise",
                             "cactus", "skelethon", "dancer", "heartbreaker", "computer", "prime number", "CEO"];
	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
		return { message: name };

	//return name;
//	exports.main = main;
}

//exports.main = main;

