import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import TransferContent from '../components/TransferContent/TransferContent'

const Transfer = () => {
    return (
        <div>
            <div className=''>
            <Header/>
            <section className='d-flex my-4'>
                <Sidebar/>
                <TransferContent/>
            </section>
            <Footer/>
        </div>
        </div>
    )
}

export default Transfer
