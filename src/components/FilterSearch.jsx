import React, { useState } from 'react'

import { ChevronDownIcon } from '@heroicons/react/solid'

const FilterSearch = ({ getCountriesByRegion }) => {
    const [toggleFilter, setToggleFilter] = useState(false)

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
        <div
            className="filter-box"
            onClick={() => setToggleFilter(!toggleFilter)}
        >
            <div className="filter-box__label ">
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
                        onClick={() => getCountriesByRegion(region)}
                    >
                        <p>{region}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterSearch
