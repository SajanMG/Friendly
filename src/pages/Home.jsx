import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    selectedCountries,
    getAllCountries,
} from '../features/countries/fetchCountriesSlice'
import FilterSearch from '../components/FilterSearch'
import SearchInput from '../components/SearchInput'
import Card from '../components/Card'

const Home = () => {
    const { countries, status } = useSelector(selectedCountries)

    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            dispatch(getAllCountries())
        }

        return () => {
            isMounted = false
        }
    }, [dispatch])

    return (
        <section className="home">
            <div className="home__search-and-filter-box">
                <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <FilterSearch />
            </div>

            {status === 'loading' ? (
                <h2>Loading...</h2>
            ) : (
                <div className="home__country-container">
                    {countries
                        ?.filter((filteredCountry) => {
                            if (SearchInput === '') {
                                return filteredCountry
                            }

                            return filteredCountry?.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        })
                        .map((country) => (
                            <Card key={country.name} country={country} />
                        ))}
                </div>
            )}
        </section>
    )
}

export default Home
