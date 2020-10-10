import React from 'react'

export default params => {

    return (
        <li>
            <a href={params.path}>
                <i className={`fa fa-${params.icon}`}></i> <span>{params.label}</span>
            </a>
        </li>
    )
}