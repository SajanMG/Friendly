import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const SearchInput = ({ searchText, setSearchText }) => {
    return (
        <div className="search-box">
            <SearchIcon className="search-icon" />
            <input
                type="text"
                placeholder="Search for a country..."
                className="input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default SearchInput
