import React from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { MdPersonOutline } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineArrowUp } from 'react-icons/ai'
// import style from './sidebar.module.css'
import '../../style.css'

const Sidebar = () => {
    return (
        <div className='container borad shadow ps-5 bg-white w-25 ms-5'>
            <nav className='d-flex flex-column justify-content-between h-100 fs-4'>
                <div className="top-nav">
                    <div className="to-dashboard d-flex pt-3">
                        <div className="icon pe-3"><BiGridAlt/></div>
                        <div className="title">Dashboard</div>
                    </div>
                    <div className="to-dashboard d-flex pt-3">
                        <div className="icon pe-3"><AiOutlineArrowUp/></div>
                        <div className="title">Transfer</div>
                    </div>
                    <div className="to-dashboard d-flex pt-3">
                        <div className="icon pe-3"><AiOutlinePlus/></div>
                        <div className="title">Top Up</div>
                    </div>
                    <div className="to-dashboard d-flex pt-3">
                        <div className="icon pe-3"><MdPersonOutline/></div>
                        <div className="title">Profile</div>
                    </div>
                </div>
                <div className="bot-nav">
                    <div className={`to-out d-flex align-items-center mb-4`}>
                        {/* <FiLogOut/> Logout */}
                        <div className="icon pe-3"><FiLogOut/></div>
                        <div className="title">Logout</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
