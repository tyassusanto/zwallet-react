import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import TransferConfirmationContent from '../components/TransferConfirmation/TransferConfirmationContent'


const TransferConfirmation = () => {
    return (
        <div>
            <div className=''>
                <Header/>
                <section className='d-flex my-4'>
                    <Sidebar/>
                    <TransferConfirmationContent/>
                </section>
                <Footer/>
            </div>
        </div>
    )
}

export default TransferConfirmation
