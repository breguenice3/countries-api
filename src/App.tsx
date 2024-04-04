import { useEffect, useState } from 'react';
import './app.css'
import { FaRegMoon, FaMoon } from "react-icons/fa";
import Search from './assets/components/search/search';
import Card from './assets/components/card/card';

function App() {

  const [countries, setCountries] = useState<any[]>([])

  useEffect(() => {
    const countriesApi = async () => {
      const response = await fetch(' https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data)
    }
    countriesApi()
  }, [])

  console.log(countries);


  return (
    <div className="App">
      <div className='header'>
        <h1>Where in the world?</h1>
        <button className='dark-mode-btn'> <FaMoon className='moon-fill' width={40} height={40} /> <FaRegMoon width={40} height={40} />Dark Mode</button>
      </div>
      <Search />
      <div className='cards-container'>
          {countries.map((country)=>{
            return(
              <Card alt={country.flags.alt} img={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital}/>
            )
          })}
      </div>
    </div>
  );
}

export default App;
