<script>
    // var userName = prompt('what\'s is your name?');
    //
    // alert('Hello ' + userName + '.  Thank you for visiting to my site!');
    //
    // var answerOne = prompt('What state was I born in?');
    // var myAnswerOne = 'Washington';
    // if (answerOne === myAnswerOne) {
    //
    //     alert('Yes! that is correct.');
    //
    // } else {
    //
    //     alert('That\'s not correct, I was born in Washington');
    // }
    //
    // var answerTwo = prompt('What military branch did I serve in?');
    // var myAnswerTwo = 'coast guard';
    // if (answerTwo === myAnswerTwo) {
    //
    //     alert('You got it right!');
    //
    // } else {
    //
    //     alert('Sorry, that\'s wrong, I was in the Coast Guard');
    // }
    //
    // var answerThree = prompt('Where am I a student at?');
    // var myAnswerThree = 'code fellows';
    // if (answerThree === myAnswerThree) {
    //
    //     alert('You are smart, right on!');
    //
    // } else {
    //
    //     alert('Oh no, that is incorrect.');
    // }
    //
    // var answerThree = prompt('What do I aspire to be?');
    // var myAnswerThree = 'developer';
    // if (answerThree === myAnswerThree) {
    //
    //     alert('Way to go, that\'s right!');
    //
    // } else {
    //
    //     alert('Oh no, that is incorrect.');
    // } -->

    var whichState = prompt('What is your favorite programming language?');
    var userAnswer = ['js', 'python', 'java'];

    //console.log(userAnswer.indexOf(whichState));
    //
    // userAnswer.indexof(javascript);
    // userAnswer.indexof(python);
    // userAnswer.indexof(java);
    if (userAnswer.indexOf(whichState) > -1) {
      alert('You\'re on your way to tech greatness!');

    } else if (userAnswer.indexOf(whichState) === -1){
      alert('Learn to code or stay in yesteryear!');
      console.log('Programming is fundamental using coding skills!');
  }
  </script>
