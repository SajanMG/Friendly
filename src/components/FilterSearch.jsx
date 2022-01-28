import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const FilterSearch = () => {
    const [toggleFilter, setToggleFilter] = useState(false)

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
                <li
                    className="region-item"
                    onClick={() => setToggleFilter(false)}
                >
                    Africa
                </li>
                <li className="region-item">America</li>
                <li className="region-item">Asia</li>
                <li className="region-item">Europe</li>
            </ul>
        </div>
    )
}

export default FilterSearch
