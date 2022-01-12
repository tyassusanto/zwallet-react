import React from 'react'
import userPhoto from '../../img/robert.svg'
import Button from '../base/Button/Button'
import Input from '../base/Input/Input'
import styles from './transferamountcontent.module.css'

const TransferAmountContent = () => {
    return (
        <div className='bg-white borad shadow d-flex  flex-column container p-4 w-100 ms-3 me-5'>
            <div className="search-receiver w-100">
                <h5>Transfer Money</h5>
            </div>
            <div className="receiver-list my-3">
                <div className="receiver-card borad p-3 shadow d-flex me-4">
                    <div className="img me-3"><img src={userPhoto} alt="" /></div>
                    <div className="amount-transfer d-flex w-100 justify-content-between">
                        <div className="trans-to">
                            <div className="name-receiver fw-bold">Samuel Suhi</div>
                            <div className="phone-receiver">+62 813-8492-9994</div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className='my-4'>Type the amount you want to transfer and then <br/>
                    press continue to the next steps.</p>
                    <div className="input-fiel d-flex flex-column align-items-center">
                        <div className="input-amount-here">
                            <Input type='number' className={`${styles.inpamount} fs-1 my-3`} placeholder='0'/>
                        </div>
                        <div className="notes-field">
                            <div className="balance-left my-4">Rp120.000 Available</div>
                            <Input className={`${styles.inputnotes} ps-4`} placeholder='Add some notes'/>
                        </div>
                    </div>
                </div>
            </div>
            <Button className='btn btn-primary w-25 me-4 align-self-end'>Continue</Button>
        </div>
    )
}

export default TransferAmountContent
