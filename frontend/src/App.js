import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Cards from "./components/cards";
import SwipeButtons from "./components/swipeButtons"
function App() {
  return (
    <div className="App">
        <Header/>
        <Cards/>
        <SwipeButtons/>
    </div>
  );
}

export default App;
