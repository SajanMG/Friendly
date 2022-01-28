import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    selectedCountries,
    getAllCountries,
} from '../../features/countries/fetchCountriesSlice'
import SearchInput from '../SearchInput'
import Country from './Country'

const Countries = ({ searchText }) => {
    const { countries, status } = useSelector(selectedCountries)

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

    if (status === 'loading') return <h2>Loading...</h2>

    return (
        <>
            {countries
                ?.filter((filteredCountry) => {
                    if (SearchInput === '') {
                        return filteredCountry
                    }

                    return filteredCountry.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                })
                .map((country) => (
                    <Country key={country.name} country={country} />
                ))}
        </>
    )
}

export default Countries
