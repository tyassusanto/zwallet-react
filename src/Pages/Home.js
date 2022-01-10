import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeContent from '../components/HomeContent/HomeContent'
import Sidebar from '../components/Sidebar/Sidebar'
import '../style.css'

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <section className='d-flex my-4'>
                <Sidebar/>
                <HomeContent/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home
