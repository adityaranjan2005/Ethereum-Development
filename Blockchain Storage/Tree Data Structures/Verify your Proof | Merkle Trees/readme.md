Verifying your Proof
Almost done! Remember that proof that we just made in the last stage?

It's time to verify it. 

The test cases will include some valid proofs and some invalid proofs, your function will need to know the difference.

 Your Goal: Complete Verify Proof
The function verifyProof takes four parameters: proof, node, root and concat.

Here are their definitions:

proof - An array of objects whose properties are data and left. (The proof you created in the previous stage)
node - A leaf node we're trying to prove is within the merkle tree.
root - The valid Merkle Root.
concat - The method used to combine the leaf nodes.
Take the node and combine it with all the data provided in the proof.

At this point you'll have your own root derived from the node and the proof. Compare this to the true root with === to see if they match.
