import React from 'react'

export default function Header({title, subtitle}) {
    return (
        <div className="header">
            <div className="container">
            <h1 className="header__title">{title}</h1>
            {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
            </div>
        </div>
    )
}
