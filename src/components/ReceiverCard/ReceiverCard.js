import React from 'react'
import styles from './receivercard.module.css'

const ReceiverCard = ({name, phone, photo}) => {
    return (
        <div className="receiver-card borad p-3 shadow d-flex me-4 my-3">
            <div className={`img me-3 img-receiver`}><img className={`${styles.imgreceiver}`} src={photo} alt="" /></div>
            <div className="amount-transfer d-flex w-100 justify-content-between">
                <div className="trans-to">
                    <div className="name-receiver fw-bold">{name}</div>
                    <div className="phone-receiver">{phone}</div>
                </div>
            </div>
        </div>
    )
}

export default ReceiverCard
