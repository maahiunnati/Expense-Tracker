import logo from './logo.svg';
import Header from "./Header";
import Balance from "./Balance";
import Incexp from "./Incexp";
import Transactionlist from "./Transactionlist";
import Addtransaction from "./Addtransaction";
import { GlobalProvider } from "./Context/GlobalState";
import Transaction from "./Transaction";
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header />
   <div className="content-center">
   
   <Balance />
   <Incexp />
   <Transactionlist/>
   <Addtransaction />
   </div>
   </GlobalProvider>
  );
}

export default App;
