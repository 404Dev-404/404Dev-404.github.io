sound = new Audio("sounds/sound1.wav");
const gifSound = () => sound.play();

let alerts = ["placeholder string leave an issue if you can think of something funny", "test1", "test2", "test3", "javascript gives me kidney stones"];

// javascript gives me kidney stones /j
// context: post on the twitter account @vibrifacts 
// which was my profile picture and something like 
// "mfw i get kidney stones"
const randomAlert = () => alert("fun fact: " + alerts[Math.floor(Math.random() * alerts.length)]);