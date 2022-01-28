import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../features/countries/fetchCountriesSlice'

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
    },
})
