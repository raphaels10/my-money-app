import React from 'react'

export default params => {

    return (
        <li className="treeview">
            <a href>
                <i className={`fa fa-${params.icon}`}></i> <span>{params.label}</span>
                <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
                {params.children}
            </ul>
        </li>
    )
}