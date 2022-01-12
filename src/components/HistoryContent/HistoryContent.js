import React from 'react'
import userPhoto from '../../img/robert.svg'

const HistoryContent = () => {
    return (
        <div className='bg-white d-flex borad shadow flex-column container p-4 w-100 ms-3 me-5'>
            <div className="title-history">
                <h5>Transaction History</h5>
            </div>
            <p>This Week</p>
            <div className="history-card d-flex me-4">
                <div className="img me-3"><img src={userPhoto} alt="" /></div>
                <div className="amount-transfer d-flex w-100 justify-content-between">
                    <div className="trans-to">
                        <div className="name fw-bold">Samuel Suhi</div>
                        <div className="needs">Transfer</div>
                    </div>
                    <div className="amount-trans text-success fw-bold align-self-center">+Rp50.000</div>
                </div>
            </div>
            <p className='mt-3'>This Month</p>
            <div className="history-card d-flex me-4">
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
    )
}

export default HistoryContent

