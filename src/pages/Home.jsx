import React, { useState, useEffect } from 'react'

import FilterSearch from '../components/FilterSearch'
import SearchInput from '../components/SearchInput'
import Card from '../components/Card'

const Home = () => {
    const [countries, setCountries] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getAllCountries()
    }, [])

    // Fetch all countries
    const getAllCountries = async () => {
        setIsLoading(true)

        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()

        if (data) {
            setCountries(data)
            setIsLoading(false)
        }
    }

    // Fetch countries by region
    const getCountriesByRegion = async (region) => {
        setIsLoading(true)

        const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
        )
        const data = await response.json()

        if (data) {
            setCountries(data)
            setIsLoading(false)
        }
    }

    return (
        <section className="home">
            <div className="home__search-and-filter-box">
                <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <FilterSearch getCountriesByRegion={getCountriesByRegion} />
            </div>

            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="home__country-container">
                    {countries
                        ?.filter((filteredCountries) => {
                            if (searchText === '') {
                                return filteredCountries
                            }

                            return filteredCountries.name.official
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        })
                        .map((country) => (
                            <Card
                                key={country.name.official}
                                country={country}
                            />
                        ))}
                </div>
            )}
        </section>
    )
}

export default Home
