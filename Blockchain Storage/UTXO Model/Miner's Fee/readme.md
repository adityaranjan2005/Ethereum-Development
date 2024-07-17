# Miner's Fee
At this point you may be wondering why in the third stage we only required that the total input amount be more than than the total output amount.

Shouldn't we also throw an error when the output amount turns out to be less? 

Nope! Actually, the remainder is given to the miner! 

This is a design choice in the Bitcoin system. It is referred to as the transaction fee.

The transaction fee can help expedite your request. A miner is much more likely to include your transaction in their next block if you include a nice hefty prize for them to collect! 

 Bitcoin has a controlled supply. For a limited time there is a reward for the miner in every block. At a certain point, this will stop and the only reward for the miner will become the transaction fees.

## Your Goal: Calculate the fee!
At the end of the execute function, calculate the fee as the sum of all the inputs minus the sum of all the outputs.

Given that we throw an error if the inputs are insufficient, this number should be at least zero. Any time outputs are less, this should be a positive fee.
Store the fee amount in a property called fee on the transaction itself.
For example:

const iTXO = new TXO(fromAddress, 5);
const oTXO = new TXO(toAddress, 3);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee ); // 2
Nice tip! 
