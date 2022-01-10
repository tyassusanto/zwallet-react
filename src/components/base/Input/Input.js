import React from 'react'
import style from './input.module.css'

const Input = ({...props}) => {
    return (
        <input className={`${style.inp}`} {...props}/>
    )
}

export default Input
