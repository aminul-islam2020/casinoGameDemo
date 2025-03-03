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

const depositAmount = deposit();
console.log(depositAmount);


