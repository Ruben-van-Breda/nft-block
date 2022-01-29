const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('53a6f4e9e13ccecb3baa30dc26731e699c8c0a562ace07357d6ea1fe099b6d31');
const myWalletAddress = myKey.getPublic('hex');

const otherKey = ec.keyFromPrivate('d8b4c2c437dc311b3126f33e3581571b232c07a45184744b0561316b63ec341c');
const otherWalletAddress = otherKey.getPublic('hex');


let rubydoo = new Blockchain();
rubydoo.miningReward = 100;



const tx2 = new Transaction(otherWalletAddress, myWalletAddress, 10);
tx2.signTransaction(otherKey);
rubydoo.addTransaction(tx2);


console.log("Starting miner...");
rubydoo.minePendingTransactions(myWalletAddress);



console.log("Starting miner...");
rubydoo.minePendingTransactions(myWalletAddress);

console.log("Balance of Ruben van Breda is ", rubydoo.getBalanceOfAddress(myWalletAddress));
console.log("Is chain valid? ", rubydoo.isChainValid());

rubydoo.chain[1].transactions[0].amount = 9990;

console.log("Balance of Ruben van Breda is ", rubydoo.getBalanceOfAddress(myWalletAddress));
console.log("Is chain valid? ", rubydoo.isChainValid());

