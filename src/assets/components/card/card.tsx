import './card.css'

interface Props{
    alt: string,
    img: string,
    name: string,
    population: number,
    region: string,
    capital: string
}


export default function Card({alt, img, name, population, region, capital}:Props){

    return(
        <div className="card">
            <div className='card-img'>
                <img src={img} alt={alt} />
            </div>
            <div className='card-info'>
                <h2>{name}</h2>
                <p><span>Population: </span>{population.toLocaleString('pt-BR').replace('.',',').replace('.', ',')}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>
            </div>
        </div>
    )
}