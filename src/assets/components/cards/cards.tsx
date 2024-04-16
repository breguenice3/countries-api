import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../card/card.css'
import Filter from "../search/filter";
import { apiURL } from "../../util/apiurl";
import { FaRegMoon, FaMoon } from "react-icons/fa";

export default function Cards() {
    const [countries, setCountries] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiURL}/all`);
            const data = await response.json();
            setCountries(data);
        }
        fetchData();
    }, []);

    const filteredCountries = countries.filter(country => {
        const byRegion = !filter || country.region.toLowerCase().includes(filter.toLowerCase());
        const byName = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
        return byRegion && byName;
    });

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('init-hidden-off');
                }
            });
        }, {
            threshold: [0, .5, 1]
        });

        const elements = document.querySelectorAll('.init-hidden');
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, [filteredCountries]);

    return (
        <div>
            <div className='header'>
                <h1>Where in the world?</h1>
            </div>
            <div className='search-container' id="all">
                <input type="text" className='input-search' placeholder='Search for a country...' value={search} onChange={(e) => setSearch(e.target.value)} />
                <div>
                    <Filter filter={filter} setFilter={setFilter} />
                </div>
            </div>
            <div className='cards-container' id="cards">
                {filteredCountries.map((country) => (
                    <Link className="card init-hidden" to={`/country/${country.name.common}`} key={country.name.common}>
                        <div>
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
                ))}
            </div>
        </div>
    )
}