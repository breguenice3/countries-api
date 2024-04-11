import { useState, useEffect } from "react";
import Search from "../search/filter";
import { Link } from "react-router-dom";
import '../card/card.css'
import Filter from "../search/filter";
import { apiURL } from "../../util/apiurl";

export default function Cards() {
    const [countries, setCountries] = useState<any[]>([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const countriesApi = async () => {
            const response = await fetch(`${apiURL}/all`);
            const data = await response.json();
            setCountries(data)
        }
        countriesApi()
    }, [])

    return (
        <div>
            <div className='search-container'>
                <input type="text" className='input-search' placeholder='Search for a country...' onChange={(e) => {
                    setSearch(e.target.value);
                    ;
                }} />
                <div>
                    <Filter />
                </div>
            </div>
            <div className='cards-container' id="cards">
                {countries.map((country) => {
                    if (search == "") {
                        return (
                            <Link className="card" to={`/country/${country.name.common}`}>
                                <div className="" key={country.name.common}>
                                    <div className='card-img'>
                                        <img src={country.flags.png} alt={country.flags.alt} />
                                    </div>
                                    <div className='card-info'>
                                        <h2>{country.name.common}</h2>
                                        <p><span>Population: </span>{country.population.toLocaleString('pt-BR').replace('.', ',').replace('.', ',')}</p>
                                        <p><span>Region: </span>{country.region}</p>
                                        <p><span>Capital: </span>{country.capital}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    } else {
                        if (country.name.common.toLowerCase().includes(search.toLocaleLowerCase())) {
                            return (
                                <Link className="card" to={`/country/${country.name.common}`}>
                                    <div className="" key={country.name.common}>
                                        <div className='card-img'>
                                            <img src={country.flags.png} alt={country.flags.alt} />
                                        </div>
                                        <div className='card-info'>
                                            <h2>{country.name.common}</h2>
                                            <p><span>Population: </span>{country.population.toLocaleString('pt-BR').replace('.', ',').replace('.', ',')}</p>
                                            <p><span>Region: </span>{country.region}</p>
                                            <p><span>Capital: </span>{country.capital}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    }
                })}
            </div>
        </div>
    )
}