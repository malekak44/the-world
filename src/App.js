import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [carts, setCarts] = useState([]);
  const handleAddClick = (country) => {
    const newCart = [...carts, country];
    setCarts(newCart);
  }
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);

  return (
    <div>
      <Header></Header>
      <Cart carts={carts}></Cart>
      <div className="countries-container">
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddClick={handleAddClick}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
