import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="main">
  <h1>Rock Paper Scissors</h1>

  <div id="areana">
    <div id="user">
    </div>

    <div id="vs"><h2>VS</h2></div>

    <div id="computer">
    </div>
  </div>

  <div id="results">
  </div>
</div>
`;

let options = ["rock", "paper", "scissors"];

let userInput = "scissors";
// prompt(`Wellcome to RockPaperScissors.js. Please enter your pick!`)

const myChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log(`you chose ${userInput}. \n`);
    document.getElementById("user").innerHTML = `
    <h2> You chose ${userInput}.</h2>
    `;
    // console.log(`${options.indexOf(userInput)} \n \n`);

    return userInput;
  } else {
    document.getElementById("user").innerHTML = `
    <h2> Error! Please enter a valid parameter: Rock, Paper or Scissors. </h2>`;
    console.log(
      "Error! Please enter a valid parameter: Rock, Paper or Scissors"
    );
    return;
  }
};

const computerChoice = () => {
  let chosenOption = options[Math.floor(Math.random() * 3)];

  document.getElementById("computer").innerHTML = `
  <h2>Computor chose ${chosenOption}.</h2>
  `;

  console.log(`Computor chose ${chosenOption}. \n`);

  // console.log(`${options.indexOf(chosenOption)} \n \n`);

  return chosenOption;
};

let userChoice = myChoice(userInput);
let puChoice = computerChoice();

// The Logics

const judge = (user, pu) => {
  const userChoiceValue = options.indexOf(user);

  const puChoiceValue = options.indexOf(pu);

  console.log(
    `User choice value: ${userChoiceValue}. \nComputer choice value ${puChoiceValue}. \n \n`
  );

  if (userChoiceValue === puChoiceValue) {
    document.getElementById("results").innerHTML =
      "<h1>It's a tie. Try again.</h1>";
    document.getElementById("results").style.backgroundColor =
      "rgb(252, 251, 169)";
    console.log(`It's a tie. Try again.`);
    return;
  } else if (userChoiceValue === 0 && puChoiceValue === 2) {
    document.getElementById("results").innerHTML = "<h1>You won!!!</h1>";
    document.getElementById("results").style.backgroundColor =
      "rgb(146, 252, 245)";
    console.log(`You won!!!`);
    return;
  } else if (userChoiceValue === 2 && puChoiceValue === 0) {
    document.getElementById("results").innerHTML =
      "<h1>Computer won.. Refresh the page to try again.</h1>";
    document.getElementById("results").style.backgroundColor =
      "rgb(252, 146, 172)";
    console.log(`Computor won.. `);
    return;
  } else if (userChoiceValue > puChoiceValue) {
    document.getElementById("results").innerHTML = "<h1>You won!!!</h1>";
    document.getElementById("results").style.backgroundColor =
      "rgb(146, 252, 245)";
    console.log(`You won!!!`);
    return;
  } else {
    document.getElementById("results").innerHTML =
      "<h1>Computer won.. Refresh the page to try again.</h1>";
    document.getElementById("results").style.backgroundColor =
      "rgb(252, 146, 172)";
    console.log(`Computor won.. `);
    return;
  }
};

judge(userChoice, puChoice);

/*setTimeout(judge, 2000); 

Though the game is working, I am not sure where did I go wrong with the setTimeout.
When I passed jdege(userChoice, puChoice) the timeout did not work...
And in this way, It works but doesn't get the right values.
I rsolved it by not using the setTimeout function :( */
