import { useState, useEffect } from "react";
import Search from "../search/search";
import { Link } from "react-router-dom";
import '../card/card.css'

export default function Cards() {
    const [countries, setCountries] = useState<any[]>([])

    useEffect(() => {
        const countriesApi = async () => {
            const response = await fetch(' https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data)
        }
        countriesApi()
    }, [])


    return (
        <div>
            <Search />
            <div className='cards-container'>
                {countries.map((country) => {
                    return (
                        <Link className="card" to={`/country/${country.name.common}`}>
                            <div className="">
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
                })}
            </div>
        </div>
    )
}