import React from 'react'
import Grid from '../layout/grid'

export default params => {
    return (
    <Grid cols={params.cols}>
        <div className="form-group">
            <label htmlFor={params.name}>{params.label}</label>
            <input className="form-control" placeholder={params.placeholder} 
            readOnly={params.readOnly} type={params.type} {...params.input}></input>
        </div>
    </Grid>
    )
}