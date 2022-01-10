import React from 'react'
import phone from '../../img/bannerphone.svg'
import style from './leftbanner.module.css'

const LeftBanner = () => {
    return (
        <div className='row'>
            <div className={`col ${style.leftbg}`}>
                <div className="bannercontent p-5 m-5 d-flex flex-column text-white ">
                    <h1>zwallet</h1>
                    <img className='align-self-center' src={phone} alt="" />
                    <h2>App that Covering Banking Needs.</h2>
                    <p className='mt-4'>Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage.</p>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner
