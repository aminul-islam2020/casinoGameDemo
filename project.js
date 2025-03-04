//Creating deposit function

const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){
    const depositAmount = prompt("Enter Depost Amount: ")
    const numberDepostAmount = parseFloat(depositAmount);

    if (isNaN(numberDepostAmount) || numberDepostAmount<=0) {
        console.log("Invalid Deposit Amount, Try Entering a Valid Deposit Number");
    } else{
    return numberDepostAmount;
  }
 }
};

//Get number of lines for playing

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines >3) {
            console.log("Invalid number of lines, try again");
        } else{
        return numberOfLines;
      }
     }
}

//setting up the bet

const getBet = (balance) =>{
    while(true){
        const bet = prompt("Enter the total bet: ")
        const numberOfbet = parseFloat(bet);
    
        if (isNaN(numberOfbet) || numberOfbet<=0 || numberOfbet > balance) {
            console.log("Invalid bet, try again");
        } else{
        return numberOfbet;
      }
     }
}

let depositAmount = deposit();

const numberOfLines = getNumberOfLines();

const bet = getBet(balance);



