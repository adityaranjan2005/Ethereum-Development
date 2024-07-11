const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // slice of the first byte of the Uint8Array publicKey
    const sliceKey = publicKey.slice(1);

    // hash the rest of the public key => returns a Uint8Array keccak256 hash
    const hashKey = keccak256(sliceKey);

    // return last 20 bytes of the Uint8Array keccak256 hash
    return hashKey.slice(-20);
}

module.exports = getAddress;
