import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="main">
 
  <div id="cont">
    <div id="areana">
      <div id="user">
        
      </div>

      <div id="vs"><img src="img/vs.png" alt="VS"></div>

      <div id="computer">
      </div>
    </div>

    <div id="results"></div>
  </div>
</div>
`;

let options = ["rock", "paper", "scissors"];
let optionImg = [
  `<img src="img/rock.png" alt="ROCK">`,
  `<img src="img/paper.png" alt="PAPER">`,
  `<img src="img/scissors.png" alt="SCISSORS">`
];

console.log(
  "selection value is ",
  document.getElementById("userSelection").value
);

let userInput = document.getElementById("userSelection").value;

const myChoice = userInput => {
  if (userInput === "rock") {
    console.log(`you chose ${userInput}. \n`);
    document.getElementById("user").innerHTML = `
    <h2> You chose ${optionImg[0]}.</h2>
    `;
    // console.log(`${options.indexOf(userInput)} \n \n`);

    return userInput;
  } else if (userInput === "paper") {
    console.log(`you chose ${userInput}. \n`);
    document.getElementById("user").innerHTML = `
    <h2> You chose ${optionImg[1]}.</h2>
    `;
    // console.log(`${options.indexOf(userInput)} \n \n`);

    return userInput;
  } else if (userInput === "scissors") {
    console.log(`you chose ${userInput}. \n`);
    document.getElementById("user").innerHTML = `
    <h2> You chose ${optionImg[2]}.</h2>
    `;
    // console.log(`${options.indexOf(userInput)} \n \n`);

    return userInput;
  } else {
    document.getElementById("cont").innerHTML = `
    <h2> Error
     Please enter a valid parameter: Rock, Paper or Scissors. </h2>`;
    console.log(
      "Error! Please enter a valid parameter: Rock, Paper or Scissors"
    );
    return;
  }
};

const computerChoice = () => {
  let chosenOption = options[Math.floor(Math.random() * 3)];
  let chosenOptionIndex = options.indexOf(chosenOption);

  console.log(`PC Index ${chosenOptionIndex}`);

  document.getElementById("computer").innerHTML = `
  <h2>Computor chose ${optionImg[chosenOptionIndex]}.</h2>
  `;

  // console.log(`123 Computor chose ${chosenOptionIndex}. \n`);

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
