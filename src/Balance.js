import React, {useContext} from "react";
import { GlobalContext } from './Context/GlobalState';
export default function Balance(){
    const { transactions } = useContext(GlobalContext); 
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item)=> (acc+=item), 0).toFixed(2);
    return(
<div className ="container content text-center p-5 mr-10">
    <h3 className="text-lg font-medium">Your Balance</h3>
    <h4 className="text-orange-400 font-bold">${total}</h4>
</div>
    )
}
