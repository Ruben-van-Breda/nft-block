const { Blockchain, Transaction } = require('./blockchain');

let awe_bc = new Blockchain();
awe_bc.createTransaction(new Transaction("master-bank", "ruben", 100));
awe_bc.createTransaction(new Transaction("ruben", "master-bank", 50));

console.log("Starting miner...");
awe_bc.minePendingTransactions("ruben");

console.log("Balance of Ruben van Breda is ", awe_bc.getBalanceOfAddress("ruben"));



console.log("Starting miner...");
awe_bc.minePendingTransactions("ruben");

console.log("Balance of Ruben van Breda is ", awe_bc.getBalanceOfAddress("ruben"));

