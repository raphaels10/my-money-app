import React from 'react'

export default params => (
    <input {...params.input} className="form-control" placeholder={params.placeholder}
        type={params.type} readOnly={params.readOnly}/>
)