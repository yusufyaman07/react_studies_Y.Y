import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransation from "./components/AddTransation";
import { GlobalContextProvider } from "./context/GlobalState";
const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransation />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
