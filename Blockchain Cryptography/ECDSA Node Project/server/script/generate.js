const secp = require("ethereum-cryptography/secp256k1")
const { toHex } = require("ethereum-cryptography/utils")

function generateKeys() {

    // public and private key object
    keys = {}

    for (let i = 0; i < 3; i++) {
        const privateKey = toHex(secp.utils.randomPrivateKey());
        const publicKey = toHex(secp.getPublicKey(privateKey))
        const address = publicKey.slice(-20)
        keys["key"+i] = [privateKey, publicKey, address]
    }
    return keys
}
console.log(generateKeys())
/* 
key0: [
    '15cb2ec6d113f2780c558317228608cf9ddaf05072f26e83bae1d9fb41c61c6c',
    '0410387389a9b5335a489fb7b6223a9b775ee72809a7a87a12b642cd2ab1a8da19fdaf2593bea335872bc534fb3e0b4fd65d25da5d5f863aa677a63fe530e19124',
    '3aa677a63fe530e19124'
  ],
  key1: [
    'f6d6854fe88943e80de33d587a6895c6277a80e3e10b32e20d61bee6761e1c40',
    '04e856a3e2543c2866dfca7c43d5ddc676d178f0153c652478750b35757b132cae4f0f5d2f422aaac35ff753cf939f8d541468a3d89bb3a3cd6cadf68626f1373a',
    'a3cd6cadf68626f1373a'
  ],
  key2: [
    'bf9c2030b8fefb50e1887216f39e50b2fc79e86b74c7cbef7b4e57b31e197831',
    '04c58537fb88483e7965e72fc62cb1bc1bed58cd32d42921e2f2d1ab75ebc37f1d7da42b7f0ed34eedccfd34f4879105610ead33d26da62ab494e00e38840b38bc',
    '2ab494e00e38840b38bc'
  ]
  */
