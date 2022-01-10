import React from 'react'
import '../../style.css'
import style from './footer.module.css'

const Footer = () => {
    return (
        <footer className={`${style.footer} mybgblue text-white d-flex justify-content-between align-items-center py-3 px-5 footer  `}>
            <div className="left-footer ps-5 w-50">2020 Zwallet. All right reserved.</div>
            <div className="right-footer d-flex align-items-center ">
                <div className="phone-footer ">+62 5637 8882 9901</div>
                <div className="contact-footer px-5">contact@zwallet.com</div>
            </div>
        </footer>
    )
}

export default Footer
