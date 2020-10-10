import React from 'react'
import If from '../operators/if'

export default params => (
    <If test={!params.hide}>
        <div className="form-group has-feedback">
            <input {...params.input} className="form-control" placeholder={params.placeholder}
            readOnly={params.readOnly} type={params.type}/>
            <span className={`glyphicon glyphicon-${params.icon} form-control-feedback`}> 
            </span>
        </div>
    </If>
)