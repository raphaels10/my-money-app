import React from 'react'

export default params => {

    return (
        <section className="content-header">
            <h1>{params.title}<small>{params.small}</small></h1>
        </section>
    )
}