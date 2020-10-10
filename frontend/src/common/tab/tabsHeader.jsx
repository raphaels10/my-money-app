import React from 'react'

export default params => {

    return (
        <ul className="nav nav-tabs">
            {params.children}
        </ul>
    )
}