import React, { useEffect, useState } from 'react'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Detail = () => {
    const [country, setCountry] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { name } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            getCountryDetail(name)
        }
        return () => {
            isMounted = false
        }
    }, [name])

    // Fetch country details
    const getCountryDetail = async (name) => {
        setIsLoading(true)
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
        )
        const data = await response.json()

        if (data) {
            setCountry(data)
            setIsLoading(false)
        }
    }

    // Fetch border country details
    const getBorderCountryInfo = async (border) => {
        setIsLoading(true)
        const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
        )
        const data = await response.json()

        if (data) {
            setCountry(data)
            setIsLoading(false)
        }
    }

    // looping through objects in the api
    const loopObj = (obj) => {
        return Object.keys(obj).map((key) => obj[key])
    }

    if (isLoading) return <Spinner />

    return (
        <section className="detail">
            <Button onClick={() => navigate('/')}>
                <ArrowNarrowLeftIcon className="arrow-left" /> Back
            </Button>

            {!isLoading &&
                country?.map((ct) => (
                    <div className="detail__contents" key={ct.name.official}>
                        <div className="detail__image-box">
                            <img
                                src={ct?.flags.svg || ct.flags.png}
                                alt={ct?.name.official}
                            />
                        </div>
                        <div className="detail__info">
                            <h2 className="country-name">
                                {ct?.name.official}
                            </h2>
                            <div className="more-info">
                                <div className="info-left">
                                    <p className="text">
                                        Native Name:{' '}
                                        <span>
                                            {
                                                loopObj(ct?.name.nativeName)[0]
                                                    .official
                                            }
                                        </span>
                                    </p>
                                    <p className="text">
                                        Population:{' '}
                                        <span>{ct?.population}</span>
                                    </p>
                                    <p className="text">
                                        Region: <span>{ct?.region}</span>
                                    </p>
                                    <p className="text">
                                        Sub Region: <span>{ct?.subregion}</span>
                                    </p>
                                    <p className="text">
                                        Capital: <span>{ct?.capital}</span>
                                    </p>
                                </div>
                                <div className="info-right">
                                    <p className="text">
                                        Top Level Domain:{' '}
                                        <span>{ct?.tld[0]}</span>
                                    </p>
                                    <p className="text">
                                        Currencies:{' '}
                                        <span>
                                            {loopObj(ct?.currencies)[0].name}
                                        </span>
                                    </p>
                                    <p className="text">
                                        languages:{' '}
                                        {Object.keys(ct?.languages).map(
                                            (key, index) => (
                                                <span key={index}>
                                                    {`${ct?.languages[key]}, `}
                                                </span>
                                            )
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="detail__border-countries">
                                <p className="text">Border Countries:</p>
                                <div className="border-btns">
                                    {ct.borders ? (
                                        ct?.borders?.map((border, index) => (
                                            <Button
                                                key={index}
                                                onClick={() =>
                                                    getBorderCountryInfo(border)
                                                }
                                            >
                                                {border}
                                            </Button>
                                        ))
                                    ) : (
                                        <p>No border countries found</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default Detail
