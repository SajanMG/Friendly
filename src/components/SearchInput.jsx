import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const SearchInput = () => {
    return (
        <div className="search-box">
            <SearchIcon className="search-icon" />
            <input
                type="text"
                placeholder="Search for a country..."
                className="input"
            />
        </div>
    )
}

export default SearchInput
