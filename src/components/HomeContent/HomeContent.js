import React from 'react'
import '../../style.css'
import grafik from '../../img/graphic.svg'
// import Button from '../base/Button/Button'

const HomeContent = () => {
    return (
        <div className='d-flex flex-column container bg-danger w-100 mx-3 '>
            <div className="balance-info w-100 mybgblue borad d-flex justify-content-between">
                <div className="left-info text-white m-4">
                    <div className="title">Balance</div>
                    <div className="myblance fs-1">Rp120.000</div>
                    <div className="myphone">+62 813-9387-7946</div>
                </div>
                <div className="right-info d-flex flex-column align-self-center pe-4">
                    <button className='mb-1'>topup</button>
                    <button className='mt-1'>transfer</button>
                </div>
            </div>
            <div className="grafik-info d-flex mt-3">
                <div className="grafik"><img src={grafik} alt="" /></div>
                <div className="history bg-secondary w-100 borad">
                    <div className="title-history d-flex justify-content-between p-4">
                        <div className="title fw-bold">Transaction History</div>
                        <div className="to-history">See All</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent
