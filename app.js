//Script to obtain user input
//Start Game
// start question1 function
var toScor = 0;
var userName = prompt('what\'s is your name?');
function question1() {
alert('Hello ' + userName + '.  Thank you for visiting to my site!');

// Question 1

var answerOne = prompt('Is Washington the \'Show Me State\'?');

var myAnswerOne = 'no';

if (answerOne === myAnswerOne) {
  toScor += 1;
  alert('You got it right, you rock!');

} else {

  alert('Sorry, that\'s wrong, try again!');

}
console.log(answerOne);
// // Question 2
var answerTwo = prompt('Do I collect comics as a hobby?').toLowerCase();
var myAnswerTwo = 'yes';
if (answerTwo === myAnswerTwo) {
  toScor += 1;
  alert('Right on, you have potential!');

} else {

  alert('Sorry, that\'s wrong, maybe next time!');
}
console.log(answerTwo);
// Qustion 3
var answerThree = prompt('What color is my SUV?').toLowerCase();
var myAnswerThree = 'tan';
if (answerThree === myAnswerThree) {

  toScor += 1;
  alert('You are a genious, right on!');

} else {

  alert('Oh no, that is incorrect.');
}
console.log(answerThree);
//Question 4
var answerFour = prompt('Was Donkey Kong orignally called Jumpman?')
var myAnswerFour = 'yes';
if (answerFour === myAnswerFour) {

  toScor += 1;
  alert('Way to go, that\'s right!');


} else {

  alert('Oh no, that is incorrect.');
}
console.log(answerFour);
}

//calling question1 function
question1();

// // Question 5
//start questionTwo funciton
function questionTwo() {
var whichLang = prompt('What is my favorite programming language?');
var userAnswer = ['javascript', 'python', 'java', 'c'];

if (userAnswer.indexOf(whichLang) > -1) {

  toScor += 1;
  alert('You\'re on your way to tech greatness!');

} else if (userAnswer.indexOf(whichLang) === -1) {
  alert('Learn to code or stay in yesteryear!');
  console.log('User score is ' + toScor + ' so far.');

}
// Question 6
var answerOne = prompt('Do I own a Mac? (y or yes/n or no)').toLowerCase();
var myAnswerOne = 'yes';
var myAnswerTwo = 'y';

if (answerOne === myAnswerOne || answerOne === myAnswerTwo) {

  toScor += 1;
  alert('Whoopee! that is correct.');


} else {

  alert('That\'s not correct, try again.');
}
// Question 7
var ranNum = Math.floor(Math.random() * 20) + 1;
var countAtt = 0;

while (countAtt < 4) {
  countAtt++;
  var userNumb = prompt('Select a number between 1 - 20 (you have 4 guesses).');

  if (parseInt(userNumb) === ranNum) {

    toScor += 1;
    alert('That\'s right!!!.');
    break;

  }
  if (parseInt(userNumb) > ranNum) {
    alert('That\'s too high, try again.');

  }
  if (parseInt(userNumb) < ranNum) {
    alert('That\'s too low, try again.');

  }
  if (countAtt === 3) {
    alert('This is your last attempt!');

  }
  if (countAtt === 4) {
    alert('Sorry that was the last guess.');
  }
}
console.log(toScor);
// Question 8
var count = 0;
var arr = ['florida', 'new jersey', 'hawaii', 'alaska', 'virginia', 'arizona'];

while (count < 6) {
  count++;
  var userGuess = prompt('Name a State I have lived in besides Washington. You have 6 tries.');

  if(userGuess === 'florida') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }if (userGuess === 'new jersey') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }if (userGuess === 'hawaii') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }if (userGuess === 'alaska') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }if (userGuess === 'virginia') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }
  if (userGuess === 'arizona') {

    toScor += 1;
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
    break;

  }if (count === 6) {
    for (i = 0; i < arr.length; i++)
    alert(arr[i]);
  }
}
console.log(arr[i]);



if (toScor === 8) {

  alert('You got 8 of 8 correct, ' + userName + ' great going!');

}if (toScor === 7) {

  alert('You got 7 of 8 correct, ' + userName + ' strong effort!');

}if (toScor === 6) {

  alert('You got 6 of 8 correct, ' + userName + ' nice try.');

}if (toScor === 5) {

  alert('You got 5 of 8 correct, ' + userName + ' try again.');

}if (toScor === 4) {

  alert('You got 4 of 8 correct, ' + userName + ' try again.');

}if (toScor === 3) {

  alert('You got 3 of 8 correct, ' + userName + ' try again.');

}if (toScor === 2) {

  alert('You got 2 of 8 correct, ' + userName + ' try again.');

}if (toScor === 1) {

  alert('You got 1 of 8 correct, ' + userName + ' try again.');

}if (toScor === 0) {

  alert('You got 0 of 8 correct, ' + userName + ' try again.');
}
}
//call questionTwo function
questionTwo();
//Keep score and show user results
console.log(toScor);
