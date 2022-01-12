import React from 'react'
import '../../style.css'
import grafik from '../../img/graphic.svg'
import userPhoto from '../../img/robert.svg'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlinePlus} from 'react-icons/ai'
import Button from '../base/Button/Button'

const HomeContent = () => {
    return (
        <div className='d-flex flex-column container w-100 ms-3 me-5'>
            <div className="balance-info w-100 shadow mybgblue borad d-flex justify-content-between">
                <div className="left-info text-white m-4">
                    <div className="title">Balance</div>
                    <div className="myblance fs-1">Rp120.000</div>
                    <div className="myphone">+62 813-9387-7946</div>
                </div>
                <div className="right-info d-flex flex-column align-self-center pe-4">
                    <Button className='btn btn-home text-white mb-2'><AiOutlinePlus/> Top Up</Button>
                    <Button className='btn btn-home text-white mt-2'><AiOutlineArrowUp/> Transfer</Button>
                </div>
            </div>
            <div className="grafik-info d-flex mt-3">
                <div className="borad shadow grafik bg-white pt-3 px-5 me-3">
                    <div className="grafik-balance d-flex justify-content-between mb-3">
                        <div className="income">
                            <div className="icon text-success"><h2><AiOutlineArrowDown/></h2></div>
                            <div className="title">Income</div>
                            <div className="income-balance fs-5">Rp2.120.000</div>
                        </div>
                        <div className="exoense">
                            <div className="icon text-danger"><h2><AiOutlineArrowUp/></h2></div>
                            <div className="title">Expense</div>
                            <div className="income-balance fs-5">Rp1.560.000</div>
                        </div>
                    </div>
                    <div className="grafik-img"><img src={grafik} alt="" /></div>
                </div>
                <div className="history bg-white shadow w-100 borad">
                    <div className="title-history d-flex justify-content-between p-4">
                        <div className="title fw-bold">Transaction History</div>
                        <div className="to-history">See All</div>
                    </div>
                    <div className="history-card d-flex mx-4">
                        <div className="img me-3"><img src={userPhoto} alt="" /></div>
                        <div className="amount-transfer d-flex w-100 justify-content-between">
                            <div className="trans-to">
                                <div className="name fw-bold">Samuel Suhi</div>
                                <div className="needs">Transfer</div>
                            </div>
                            <div className="amount-trans text-success fw-bold align-self-center">+Rp50.000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent
