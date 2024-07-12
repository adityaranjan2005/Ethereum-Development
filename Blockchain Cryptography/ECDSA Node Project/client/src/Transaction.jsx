function Transaction({ transaction }) {
    return (
        <div>
            <h1>Transactions</h1>
            {transaction.length > 0 && <>
                <div className="txn">
                    {transaction.map(txn => {
                        return <div className="container" key={txn.nonce}>
                            <b>Time : </b> {txn.time} <br />
                            <b>Amount : </b> {txn.amount} <br />
                            <b>Sender : </b> {txn.sender} <br />
                            <b>Recipient : </b> {txn.recipient} <br />
                            <b>Nonce : </b> {txn.nonce} <br />
                        </div>
                    })}
                </div>
            </>}
        </div>
    );
}
export default Transaction;