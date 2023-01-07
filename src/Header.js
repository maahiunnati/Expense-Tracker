import React from 'react'
import logo from "./notesexp.png"
export default function Header(){
    return(
    <div className="container flex flex-row bg-red-900 text-white py-2 px-5 Mulish font-semibold text-xl">
        <h2 >Expense Tracker</h2>
        <img className="mx-[1100px] border-cyan border-2 rounded-3xl" src={logo} width="50px"></img>
        </div>
    )
}
