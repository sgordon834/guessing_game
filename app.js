// Script to obtain user input
// Start of N1 js. 4 questions

var userName = prompt('what\'s is your name?');

alert('Hello ' + userName + '.  Thank you for visiting to my site!');

console.log(userName);

var answerOne = prompt('Is Washington the \'Show Me State\'?').toLowerCase();
var myAnswerOne = 'no';

if (answerOne === myAnswerOne) {

    alert('You got it right, you rock!');

} else {

    alert('Sorry, that\'s wrong, try again!');
}

var answerTwo = prompt('Does a cat purr?').toLowerCase();
var myAnswerTwo = 'yes';
if (answerTwo === myAnswerTwo) {

    alert('Right again!');

} else {

    alert('Sorry, that\'s wrong, maybe next time!');
}

var answerThree = prompt('Was President Reagan an actor?').toLowerCase();
var myAnswerThree = 'yes';
if (answerThree === myAnswerThree) {

    alert('You are a genious, right on!');

} else {

    alert('Oh no, that is incorrect.');
}

var answerThree = prompt('Are lions purple?').toLowerCase();
var myAnswerThree = 'no';
if (answerThree === myAnswerThree) {

    alert('Way to go, that\'s right!');

} else {

    alert('Oh no, that is incorrect.');
}

// Start of N2 Array and Comparators. 2 questions.

// Array question

var whichLang = prompt('What is your favorite programming language?');
var userAnswer = ['js', 'python', 'java', 'c'];

if (userAnswer.indexOf(whichLang) > -1) {
    alert('You\'re on your way to tech greatness!');
    console.log('Programming is fundamental using coding skills!');

} else if (userAnswer.indexOf(whichLang) === -1) {
    alert('Learn to code or stay in yesteryear!');
    console.log('Try out Code Fellows to exercise your brain!')

}

//  Logical Or question

var answerOne = prompt('Is the moon round? (y or yes/n or no)').toLowerCase();
var myAnswerOne = 'yes';
var myAnswerTwo = 'y';

if (answerOne === myAnswerOne || answerOne === myAnswerTwo) {

    alert('Whoopee! that is correct.');

} else {

    alert('That\'s not correct, try again.');
}
