import React from 'react'
import { FiBell } from 'react-icons/fi'
import userPhoto from '../../img/robert.svg'
import style from './header.module.css'
import '../../style.css'

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user);
    return (
        <div className={`container-fluid bg-white ${style.headerstyle}`}>
            <div className='d-flex justify-content-between mx-5 px-5 py-3'>
                <h1 className='mytextblue'>Zwallet</h1>
                <div className="right-header d-flex">
                    <div className="photo-header"><img src={userPhoto} alt="" /></div>
                    <div className="name-phone-header px-3 text-left">
                        <div className="name-user-profile">{user && user.name}</div>
                        <div className="phone-user-profile">{user.phone}</div>
                    </div>
                    <div className="ntf-icon align-self-center"><FiBell/></div>
                </div>
            </div>
        </div>
    )
}

export default Header
