import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const History = () => {
    return (
        <div>
            <div className=''>
            <Header/>
            <section className='d-flex my-4'>
                <Sidebar/>

            </section>
            <Footer/>
        </div>
        </div>
    )
}

export default History
