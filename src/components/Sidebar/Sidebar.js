/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiGridAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { MdPersonOutline } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineArrowUp } from 'react-icons/ai'
// import style from './sidebar.module.css'
import '../../style.css'

const Sidebar = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        navigate('/login')
    }
    return (
        <div className='container borad shadow ps-5 bg-white w-25 ms-5'>
            <nav className='d-flex flex-column justify-content-between h-100 fs-4'>
                <div className="top-nav">
                    <Link to={'/'} style={{textDecoration : 'none'}}>
                    <div className="to-dashboard d-flex pt-3">
                        <div className="icon pe-3"><BiGridAlt/></div>
                        <div className="title">Dashboard</div>
                    </div>
                    </Link>
                    <Link to={'/transfer'} style={{textDecoration : 'none'}}>
                    <div className="to-transfer d-flex pt-3">
                        <div className="icon pe-3"><AiOutlineArrowUp/></div>
                        <div className="title">Transfer</div>
                    </div>
                    </Link>
                    <div className="to-topup d-flex pt-3">
                        <div className="icon pe-3"><AiOutlinePlus/></div>
                        <div className="title">Top Up</div>
                    </div>
                    <div className="to-profile d-flex pt-3">
                        <div className="icon pe-3"><MdPersonOutline/></div>
                        <div className="title">Profile</div>
                    </div>
                </div>
                <div className="bot-nav">
                <Link to={'/login'} onClick={handleLogOut} style={{textDecoration : 'none'}}>
                    <div className={`to-out d-flex align-items-center mb-4`}>
                        <div className="icon pe-3"><FiLogOut/></div>
                        <div className="title">Logout</div>
                    </div>
                </Link>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
