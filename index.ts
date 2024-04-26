#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement

if (answer.operator === "Addition"){
    console.log("Your value is", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction"){
    console.log("Your value is", answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication"){
    console.log("Your value is", answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division"){
    console.log("Your value is", answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select a valid operator");
    
}
