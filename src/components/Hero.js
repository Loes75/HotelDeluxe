import React from 'react'

export default function Hero({children, bg}) {
    return (
        <header className={`header ${bg}`}>{children}</header>
    )
}
