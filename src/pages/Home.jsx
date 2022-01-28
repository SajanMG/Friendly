import React from 'react'
import FilterSearch from '../components/FilterSearch'
import SearchInput from '../components/SearchInput'

const Home = () => {
    return (
        <section className="home">
            {/* search and filter */}
            <div className="home__search-and-filter-box">
                <SearchInput />
                <FilterSearch />
            </div>
            {/* country box */}
            <div className="country-container"></div>
        </section>
    )
}

export default Home
