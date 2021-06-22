import React, {useState} from 'react'

function AddTransaction() {
    const [text, setText] = useState('')
    const[amount, setAmount] = useState(0)
    return (
        <>
        <h3>Add new transaction</h3>
        <form >
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input value = {text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
            </label>
            
            <input value = {amount} type="number" onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </>
    )
}

export default AddTransaction
