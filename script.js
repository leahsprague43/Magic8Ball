let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";



function chooseRandomAnswerType() {
  let randomNumber = getRandomNumber(0, 2);
    if (randomNumber == 0) {
      return ("positive");
    } else if (randomNumber == 1) {
      return ("negative");
    } else {
      return ("maybe");
    }
}
 chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
  let randomIndex = getRandomNumber(0, 4);
    if (answerType == "positive") {
      return positiveAnswers[0, 4];
    } else if (answerType == "negative") {
      return negativeAnswers[0, 4];
    } else {
      return maybeAnswers[0, 4];
    }
}

chooseRandomAnswerTest();

function onAnswerRequested() {
  if (getQuestionText() == "") {
    supplyAnswer(NO_QUESTION_WARNING);
  } else {
    supplyAnswer(chooseRandomAnswer(chooseRandomAnswerType()));
  }
}

onAnswerRequestedTest();
