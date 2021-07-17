import React from 'react'

export default function Option({ count, optionText, handleDeleteOption }) {
    return (
        <div className="option">
            <p className="option__text">{count}. {optionText}</p>
            <button className="button button--link"
                onClick={() => handleDeleteOption(optionText)}>remove</button>
        </div>
    )
}
