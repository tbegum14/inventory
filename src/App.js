import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Fooditem from './fooditem';
import food from "./food"

function App() {
  const foods = food.map(item=>{
    return <Fooditem item={item} />
  })

  return (
    <div className="App">
        <Navbar />
        <section className="food-items">
        {foods}
        </section>

    </div>
  );
}

export default App;
