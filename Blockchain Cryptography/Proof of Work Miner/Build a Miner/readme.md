## Target Difficulty
In bitcoin, the difficulty is adjusted every 2016 blocks, which is about every two weeks with the blocks being mined on average every 10 minutes.

At that point, the difficulty is adjusted to attempt to keep the mining intervals around that 10 minute per block mark.

## Your Goal: Proof of Work
Now it's time to actually mine the block. This is where we get the work part of proof of work!

In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY
You can compare a BigInt to another BigInt using the JavaScript comparison operators. You can convert from a hash to be a BigInt by:

const hash = SHA256("example");
const int = BigInt(`0x${hash}`);
