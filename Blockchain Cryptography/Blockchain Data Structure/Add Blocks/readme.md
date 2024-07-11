## Your Goal: Create an addBlock Function
Let's create an addBlock function on our Blockchain class.

This function should take in a new block and add it to the chain array:

const blockchain = new Blockchain();
const block = new Block("Charlie sent Dave 2 BTC");

blockchain.addBlock(block);

console.log(blockchain.chain.length); // 2
 Remember we should have both the genesis block and the new block now.
