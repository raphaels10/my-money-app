import React from 'react'
import Grid from '../layout/grid'

export default params => {

    return (
        <Grid cols={params.cols}>
            <div className={`small-box bg-${params.color}`}>
                <div className="inner">
                    <h3>{params.value}</h3>
                    <p>{params.text}</p>
                </div>
                <div className="icon">
                    <i className={`fa fa-${params.icon}`}></i>
                </div>
            </div>
        </Grid>
    )
}