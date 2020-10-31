let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ali";

if (typeof userInput === "string") {
  userName = userInput;
}

function handleTheError(message: string, code: number) {
  throw {
    message,
    code
  };
  //the script breaks and doesn't go any further from here
  console.log("Did the script break");
}

handleTheError("We have an error", 500);
