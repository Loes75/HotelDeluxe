import React from 'react'

export default function Banner({title,info,children}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <span></span>
            <h3>{info}</h3>
            {children}
        </div>
    )
}
