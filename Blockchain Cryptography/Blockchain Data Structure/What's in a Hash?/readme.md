## Adding Data to the Hash
Now it's time to add data to our hash. This will ensure that the block's hash is tied to its contents!

## Your Goal: Hash the Data
When creating a new block, data will be passed to its constructor:

const block = new Block("Alice sent Bob 1 BTC");

console.log( block.data ); // Alice sent Bob 1 BTC
 As shown above, let's add a data property to the Block.

Add a constructor to our Block class that takes one argument data and assigns it to this.data
Once you have added data to the block, use this data to calculate the block's hash in the toHash function!
