import React from 'react'
import Input from '../base/Input/Input'
import styles from './transfercontent.module.css'
import userPhoto from '../../img/robert.svg'

const TransferContent = () => {
    return (
        <div className='bg-white borad shadow d-flex  flex-column container p-4 w-100 ms-3 me-5'>
            <div className="search-receiver w-100">
                <h5>Search Receiver</h5>
                <Input placeholder='Search receiver here' className={`${styles.inpsearch} w-100 px-5 py-2`}/>
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
            </div>
        </div>
    )
}

export default TransferContent
