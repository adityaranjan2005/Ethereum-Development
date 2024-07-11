## Chain Validation
Blockchains are run by a network of computers. When a computer finds a new block, it broadcasts its new version of the blockchain to all of its peers. There may be multiple versions of the blockchain at any given time. However, the longest valid blockchain is the accepted one.

 Let's take a closer look at the logic behind this in details.

## Your Goal: Create an isValid Function
Create a function called isValid on our Blockchain that will return true or false if a block is valid or invalid respectively
isValid should check the integrity of every block in its chain by looking at each block's previousHash field and making sure that it is equal to the hash of the block before it
## 💡 Hint
To compare the output of the SHA256 function you will need to convert it into a string (.toString) before comparing. Example:

const hash1 = SHA256("a");
const hash2 = SHA256("a");

console.log(hash1 === hash2); // false
console.log(hash1.toString() === hash2.toString()); // true
