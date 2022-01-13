import React from 'react'
import userPhoto from '../../img/robert.svg'
import Button from '../base/Button/Button'

const TransferConfirmationContent = () => {
    return (
        <div className='bg-white borad shadow d-flex  flex-column container p-4 w-100 ms-3 me-5'>
            <div className="detail-confirmation w-100">
                <h5>Transfer To</h5>
                <div className="receiver-card borad p-3 shadow d-flex me-4 my-4">
                    <div className="img me-3"><img src={userPhoto} alt="" /></div>
                    <div className="amount-transfer d-flex w-100 justify-content-between">
                        <div className="trans-to">
                            <div className="name-receiver fw-bold">Samuel Suhi</div>
                            <div className="phone-receiver">+62 813 8492 9994</div>
                        </div>
                    </div>
                </div>
                <h5>Details</h5>
                <div className="details">
                    <div className="details-card borad shadow my-2 px-3 py-2 me-4">
                        Amount
                        <p className='fw-bold'>Rp.100.000</p>
                    </div>
                    <div className="details-card borad shadow my-2 px-3 py-2 me-4">
                        Balance Left
                        <p className='fw-bold'>Rp20.000</p>
                    </div>
                    <div className="details-card borad shadow my-2 px-3 py-2 me-4">
                        Date & Time
                        <p className='fw-bold'>May 11, 2020 - 12.20</p>
                    </div>
                    <div className="details-card borad shadow my-2 px-3 py-2 me-4">
                        Notes
                        <p className='fw-bold'>For buying some socks</p>
                    </div>
                </div>
            </div>
            <Button className='btn btn-primary w-25 me-4 align-self-end'>Continue</Button>
        </div>
    )
}

export default TransferConfirmationContent
