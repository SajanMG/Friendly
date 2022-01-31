import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const SearchInput = ({ searchText, setSearchText }) => {
    const searchHandler = (e) => setSearchText(e.target.value)

    return (
        <form className="search-box">
            <SearchIcon className="search-icon" />
            <input
                type="text"
                placeholder="Search for a country..."
                className="input"
                value={searchText}
                onChange={searchHandler}
            />
        </form>
    )
}

export default SearchInput
