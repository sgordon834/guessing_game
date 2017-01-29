//Script to obtain user input
//Start Game
var userName = prompt('what\'s is your name?');

alert('Hello ' + userName + '.  Thank you for visiting to my site!');

console.log(userName);

//Question 1
var answerOne = prompt('Is Washington the \'Show Me State\'?').toLowerCase();
var myAnswerOne = 'no';

if (answerOne === myAnswerOne) {

  alert('You got it right, you rock!');
//   quesCor++;
//   toScor++;
// console.log(quesCor);
} else {

  alert('Sorry, that\'s wrong, try again!');
  // toSco++;
}
// Question 2
var answerTwo = prompt('What do I collect as a hobby?');
var myAnswerTwo = 'comics';
if (answerTwo === myAnswerTwo) {

  alert('Right again!');
  // quesCor++;

} else {

  alert('Sorry, that\'s wrong, maybe next time!');
}
// Qustion 3
var answerThree = prompt('What color is my SUV?').toLowerCase();
var myAnswerThree = 'tan';
if (answerThree === myAnswerThree) {

  alert('You are a genious, right on!');

} else {

  alert('Oh no, that is incorrect.');
}

var answerFour = prompt('Who is Mario\'s girlfriend from Donkey Kong?')
var myAnswerFour = 'pauline';
if (answerFour === myAnswerFour) {

  alert('Way to go, that\'s right!');

} else {

  alert('Oh no, that is incorrect.');
}

// Question 5

var whichLang = prompt('What is your favorite programming language?');
var userAnswer = ['js', 'python', 'java', 'c'];

if (userAnswer.indexOf(whichLang) > -1) {
  alert('You\'re on your way to tech greatness!');
  console.log('Programming is fundamental using coding skills!');

} else if (userAnswer.indexOf(whichLang) === -1) {
  alert('Learn to code or stay in yesteryear!');
  console.log('Try out Code Fellows to exercise your brain!')

}

// Question 6

var answerOne = prompt('Is the moon round? (y or yes/n or no)').toLowerCase();
var myAnswerOne = 'yes';
var myAnswerTwo = 'y';

if (answerOne === myAnswerOne || answerOne === myAnswerTwo) {

  alert('Whoopee! that is correct.');

} else {

  alert('That\'s not correct, try again.');
}


// Question 7

var num = 15;
var corrNumb = num.toString();
var countAtt = 0;

console.log(num);

while(countAtt < 5){
  countAtt++;
  var userNumb = prompt('Select a number between 1 - 25 (you have 4 guesses).');

  if(userNumb === corrNumb){
    alert('That\'s right!!!.');
    break;

  }if(userNumb > corrNumb){
    alert('That\'s too high, try again.');

  }if(userNumb < corrNumb){
    alert('That\'s too low, try again.');

  }if(countAtt === 5) {
    alert('Sorry that was the last guess.');
  }
}

// Question 8
var count = 0;
var arr = ['florida', 'new jersey', 'hawaii', 'alaska', 'virginia', 'arizona'];

while (count < 6) {
  count++;
  var userGuess = prompt('Name a State I have lived in besides Washington. You have 6 tries.');

  if (userGuess === 'florida') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }
  if (userGuess === 'new jersey') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;
  }
  if (userGuess === 'hawaii') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }
  if (userGuess === 'alaska') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;
  }
  if (userGuess === 'new jersey') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;
  }
  if (userGuess === 'new jersey') {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;
  }
  if (count === 6) {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
  }
}

// var num = 0;
// var quesCor = num.toString();
// var toScor = 0;
// var arra = [];
// for (k = 0; k < arra.length; k++) {
//   quesCor = quesCor++;
  // toScor = toScor++;
// }
//
// console.log(quesCor, toScor);
