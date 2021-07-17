import React from 'react'

import Option from './Option'

export default function Options({ handleDeleteOptions, handleDeleteOption, options }) {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">You options</h3>
                <button
                    className="button button--link"
                    onClick={handleDeleteOptions} >Delete All</button>
            </div>
            {options?.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            {options?.map((o, i) => (
                <Option
                    key={i}
                    count={i + 1}
                    optionText={o} handleDeleteOption={handleDeleteOption} />
            ))}
        </div>
    )
}
