const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        // return (this.index + "" + Range(0, 100)).toString();
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substr(0, difficulty) != Array(difficulty + 1).join("0")) {
            // can't change values of the block so need to introduce a random value called 'nonce'
            this.nonce++;
            this.hash = this.calculateHash();

        }
        console.log("Block mined: " + this.hash);
    }
}

class BLockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5; // mining difficulty
    }

    createGenesisBlock() {
        return new Block(0, "09/09/1999", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        // newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if (currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash != prevBlock.hash) {
                return false;
            }
        }
        return true; // chain is vaild
    }
}


let dr_bc = new BLockchain();

console.log("Mining block 1...");
dr_bc.addBlock(new Block(1, "23/01/2022", { amount: 4 }));
console.log("Mining block 2...");
dr_bc.addBlock(new Block(2, "24/01/2022", { amount: 10 }));



