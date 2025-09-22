
function checkBalance(balance, amount) {
  return new Promise((resolve, reject) => {
    if (balance >= amount) {
      resolve("Balance sufficient");
    } else {
      reject("Insufficient funds");
    }
  });
}


function deductAmount(balance, amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      let newBalance = balance - amount;
      resolve(newBalance);
    } else {
      reject("Invalid amount to deduct");
    }
  });
}


function confirmTransaction() {
  return new Promise((resolve, reject) => {
   
    const success = true; 
    if (success) {
      resolve("Transaction confirmed");
    } else {
      reject("Transaction failed at confirmation");
    }
  });
}


function transferMoney(balance, amount) {
  return checkBalance(balance, amount)
    .then(() => deductAmount(balance, amount))
    .then(() => confirmTransaction())
    .then(() => "Transaction complete")
    .catch(error => Promise.reject(error));
}


transferMoney(500, 50)
  .then(msg => console.log(msg))    
  .catch(err => console.error(err)); 
