## Blocks and Hashes
Blockchain is aptly named! It is, in fact, a chain of blocks. 

Each block contains transactional data, some metadata describing the block itself, and a link to the previous block before it. These components are fed into a hash function to create a unique sequence of bits to represent the block.

## Your Goal: Return a Hash
In your Block.js file, we have a class Block. Using the SHA256 function from the Crypto JS Library, return a valid hash in the toHash function.

For now, there's no need to hash anything in particular since the block contains none of the components we mentioned above.

 Feel free to hash a message, your own name, or nothing at all! So long as it is a 64 character hexadecimal string you will pass this stage.
