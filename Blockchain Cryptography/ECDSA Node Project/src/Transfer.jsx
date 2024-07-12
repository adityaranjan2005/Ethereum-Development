import { useState, useEffect } from "react";
import server from "./server";

// import ethereum library 
import * as secp from "ethereum-cryptography/secp256k1";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak"

function Transfer({ address, setBalance, privateKey, setTransaction }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  // nonce
  const [nonce, setNone] = useState(0);

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    // generate message hash
    const msgHash = keccak256(utf8ToBytes(recipient + sendAmount + JSON.stringify(nonce)))
    // sign message (transection)
    const signTxn = await secp.sign(msgHash, privateKey, { recovered: true });
    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
        nonce,
        signTxn
      });
      const dataTxn = {
        // console.log(address);
        time: new Date().toLocaleString(),
        amount: parseInt(sendAmount),
        sender: address,
        recipient,
        nonce: parseInt(nonce)
      }

      // transaction 
      setTransaction( transaction => [...transaction, dataTxn]);
      setBalance(balance);
      setNone((preNonce) => preNonce + 1)
    } catch (ex) {
      alert(ex.response.data.message);
    }
    
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
