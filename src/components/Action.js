import React from 'react'

export default function Action({ handlePick, hasOptions }) {
    return (
        <div>
            <button
                className="big-button"
                onClick={handlePick}
                disabled={!hasOptions}
            >What should i do?</button>
        </div>
    )
}
