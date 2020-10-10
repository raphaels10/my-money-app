import React from 'react'

export default params => {
    if(params.test){
        return params.children
    }
    else {
        return false
    }
}