import React,{useState,useContext} from 'react';
import {GlobalContext} from './Context/GlobalState';
export default function Addtransaction(){
   
    const [text, setText] = useState ('');
   const [amount, setAmount] = useState(0);
   const {addTransaction} = useContext(GlobalContext);
   
const onSubmit = e =>{
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random()*10000000),
text,
amount: +amount
    }

    addTransaction(newTransaction);
}


   return(
        <div className='content-center'>
        <h3 className='bg-red-900 text-white mx-[400px] text-2xl text-center p-2 m-2 rounded-xl'>Add new transacrtion</h3>
        <form className="text-center" onSubmit={onSubmit}>
            <div>
                <label className="font-sans" htmlFor="text">Text</label><br/>
                <hr className="border-indigo-300 border-1 mx-[550px]"></hr>
                <input className="border-slate-400 border-2 mx-5 my-3 px-3" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
                </div>
                <div>
                    <label htmlFor="amount">Amount
                    
                <br/>
                <hr className="border-indigo-300 border-1 mx-[550px]"></hr>
                (Negative = expense, Positive = Income)
                </label><br/>
                <input className="border-slate-400 border-2 mx-5 my-3 px-3" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount"></input>
            </div>
            <button className="bg-red-900 rounded-xl text-white px-10 py-2 text-center mx-[500px]">Add transaction</button>
            </form>   
         </div>
    )
}
