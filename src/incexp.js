import React,{useContext} from 'react';
import { GlobalContext } from './Context/GlobalState';
export default function Incexp(){
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
const income = amounts
 .filter(item => item >0)
 .reduce((acc, item) => (acc+=item),0)
 .toFixed(2);
 const expense =(
    amounts.filter(item => item<0).reduce((acc,item) =>(acc+=item), 0)*
    -1
 ).toFixed(2);
    return(
<div className=" flex flex-row ">
    <div className="mx-auto border-green-700 border-2 p-5">
        <h4>Income</h4>
        <p className="text-blue-700 text-xl font-bold">{income}</p>
   </div>
   <div className="mx-auto border-green-700 border-2 p-5">
        <h4>Expense</h4>
        <p className="text-red-700 text-xl font-bold">{expense}</p>
    </div>
</div>
    )
}
