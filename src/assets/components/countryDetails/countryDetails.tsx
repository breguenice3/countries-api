import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './countryDetails.css'

export default function CountryDetails() {

    const [country, setCountry] = useState<any[]>([])

    const { countryName } = useParams()

    useEffect(() => {
        const countriesApi = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await response.json();
            setCountry(data)
        }
        countriesApi()
    }, [])

    return (
        <div>
            <div className="btn-container">
                <Link to='/'>
                    <button className="back-btn">Back</button>
                </Link>
            </div>
            <div className="country-container">
                <div>
                    {country.length > 0 && <img src={country[0].flags.png} alt={country[0].altSpellings[0]} className="country-flag" />
                    }
                </div>
                <div className="country-infos">
                    {country.length > 0 && <h2>{country[0].name.common}</h2>}
                    {country.length > 0 && <div className="country-infos-second">
                        <p><span>Native Name: </span>{country[0].name.official}</p>
                        <p><span>Population: </span>{country[0].population.toLocaleString('pt-BR').replace('.', ',').replace('.', ',')}</p>
                        <p><span>Region: </span>{country[0].region}</p>
                        <p><span>Sub Region: </span>{country[0].subregion}</p>
                        <p><span>Capital: </span>{country[0].capital}</p>
                    </div>}
                    <div className="borders-container">
                        <div>
                            <p><span>Border Countries: </span></p>
                        </div>
                        <div className="borders-countries">
                            {country.length > 0 && country[0].borders && country[0].borders.map((element: string) => {
                                return <p className="box-border">{element}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}