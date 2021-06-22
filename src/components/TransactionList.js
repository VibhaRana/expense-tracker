import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction';


function TransactionList() {
    const context = useContext(GlobalContext)
    console.log(context)
    // Destructure transactions from context
    const { transactions } = useContext(GlobalContext);


    return (
        <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
        <Transaction 
        key={transaction.id} 
        transaction={transaction} 
        />))}
      </ul>
    </>
    )
}

export default TransactionList
