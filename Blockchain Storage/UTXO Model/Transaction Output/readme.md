## Transaction Outputs
Now it's time to create an object for Transaction Outputs(TXOs)!

Using a Bitcoin Block Explorer you can look up TXOs on the actual network. If we wanted to look up UTXOs for a particular address, for instance:

https://blockchain.info/unspent?active=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa

 The value after active= is an address. This particular address was the one Satoshi used when they mined the first Bitcoin block.

## Your Goal: Create a TXO class
Let's complete the constructor and spend methods for the TXO class in the TXO.js file.

The constructor should store the values passed into it on properties of the same name. It should also create a property spent and default it to false.
The spend function should set the spent property to true. For example:
const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);

console.log( txo.owner ); // 1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM
console.log( txo.amount ); // 10
console.log( txo.spent ); // false

txo.spend();

console.log( txo.spent ); // true
 Notice how spent is initially false when we create the new TXO. After invoking the spend function, spent should be set to true.
