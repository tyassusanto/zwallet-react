import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HistoryContent from '../components/HistoryContent/HistoryContent'
import Sidebar from '../components/Sidebar/Sidebar'

const History = () => {
    return (
        <div>
            <div className=''>
            <Header/>
            <section className='d-flex my-4'>
                <Sidebar/>
                <HistoryContent/>
            </section>
            <Footer/>
        </div>
        </div>
    )
}

export default History
