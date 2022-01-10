import React from 'react'

const Button = ({children, ...props}) => {
    return (
        <button className='btn btn-primary'>{children}</button>
    )
}

export default Button
