import { useState } from 'react'
import './filter.css'

export default function Filter({filter, setFilter}: React.ComponentState) {

    const [region, setRegion] = useState('')

    const selectOption = (e:any)=> {
        const regionSelected = e.target.value;
        setFilter(regionSelected);
    }

    return (
        <select onChange={selectOption}>
            <option className="option" value="">Filter by Region</option>
            <option className="option" value="Africa">
                Africa
            </option>
            <option className="option" value="America">
                America
            </option>
            <option className="option" value="Asia">
                Asia
            </option>
            <option className="option" value="Europe">
                Europe
            </option>
            <option className="option" value="Oceania">
                Oceania
            </option>
        </select>
    )
}