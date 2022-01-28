import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllCountries = createAsyncThunk('getCountries', async () => {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()

    return data
})

const fetchCountriesSlice = createSlice({
    name: 'countries',
    initialState: { countries: [], status: null },
    reducers: {
        filterByRegion: (state, { payload }) => {
            state.countries = state.countries?.filter(
                (country) => country.region === payload
            )
        },
    },
    extraReducers: {
        [getAllCountries.pending]: (state, _action) => {
            state.status = 'loading'
        },
        [getAllCountries.fulfilled]: (state, { payload }) => {
            state.countries = payload
            state.status = 'success'
        },
        [getAllCountries.rejected]: (state, _action) => {
            state.status = 'failed'
        },
    },
})

export const selectedCountries = (state) => state.countries
export const { filterByRegion } = fetchCountriesSlice.actions

export default fetchCountriesSlice.reducer
