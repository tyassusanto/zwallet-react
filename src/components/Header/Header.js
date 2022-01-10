import React from 'react'
import { FiBell } from 'react-icons/fi'
import userPhoto from '../../img/robert.svg'
import style from './header.module.css'
import '../../style.css'

const Header = () => {
    return (
        <div className={`container-fluid ${style.headerstyle}`}>
            <div className='d-flex justify-content-between mx-5 px-5 py-3'>
                <h1 className='mytextblue'>Zwallet</h1>
                <div className="right-header d-flex">
                    <div className="photo-header"><img src={userPhoto} alt="" /></div>
                    <div className="name-phone-header px-3 text-left">
                        <div className="name-user-profile">Richard Chandler</div>
                        <div className="phone-user-profile">+62 8139 3877 7946</div>
                    </div>
                    <div className="ntf-icon align-self-center"><FiBell/></div>
                </div>
            </div>
        </div>
    )
}

export default Header
