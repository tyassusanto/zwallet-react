import React from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import style from './sidebar.module.css'
import '../../style.css'

const Sidebar = () => {
    return (
        <div className='container ps-5 bg-light w-25 ms-5'>
            <nav className='d-flex flex-column h-100 fs-4'>
                <div className="top-nav">
                    <div className="to-dashboard d-flex">
                        <div className="icon pe-3"><BiGridAlt/></div>
                        <div className="title">Dashboard</div>
                    </div>
                </div>
                <div className="bot-nav">
                    <div className={`${style.hovereffect} to-dashboard d-flex align-items-center border boderder-dark`}>
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
