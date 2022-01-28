import React, { useState } from 'react'
import Countries from '../components/countries/Countries'
import FilterSearch from '../components/FilterSearch'
import SearchInput from '../components/SearchInput'

const Home = () => {
    const [searchText, setSearchText] = useState('')

    return (
        <section className="home">
            {/* search and filter */}
            <div className="home__search-and-filter-box">
                <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <FilterSearch />
            </div>
            {/* country box */}
            <div className="home__country-container">
                <Countries searchText={searchText} />
            </div>
        </section>
    )
}

export default Home
