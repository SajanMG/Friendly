import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ country }) => {
    return (
        <Link to={`/${country.name}`}>
            <div className="card">
                <div className="card__image-box">
                    <img
                        src={country?.flags.svg || country.flags.png}
                        alt={country.name}
                    />
                </div>
                <div className="card__contents">
                    <h3 className="name">{country?.name || 'No Data'}</h3>
                    <p className="label">
                        Population:{' '}
                        <span>{country?.population || 'No Data'}</span>
                    </p>
                    <p className="label">
                        Region: <span>{country?.region || 'No Data'}</span>
                    </p>
                    <p className="label">
                        Capital: <span>{country?.capital || 'No Data'}</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card
