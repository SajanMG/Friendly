import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { filterByRegion } from '../features/countries/fetchCountriesSlice'

const FilterSearch = () => {
    const [toggleFilter, setToggleFilter] = useState(false)

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const dispatch = useDispatch()

    return (
        <div
            className="filter-box"
            onClick={() => setToggleFilter(!toggleFilter)}
        >
            <div className="filter-box__label">
                <p>Filter by Region</p>
                <ChevronDownIcon className="down-icon" />
            </div>
            <ul
                className={
                    toggleFilter
                        ? 'filter-box__region-items show-region'
                        : 'filter-box__region-items'
                }
            >
                {regions.map((region, index) => (
                    <li
                        key={index}
                        className="region-item"
                        onClick={() => dispatch(filterByRegion(region))}
                    >
                        {region}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterSearch
