import React from 'react'
import Input from '../base/Input/Input'
import Button from '../base/Button/Button'
import style from './registerform.module.css'
// import style from '../base/Button/button.module.css'
// import { AiOutlineMail } from 'react-icons/ai'


const RightForm = () => {
    // const mailIcon = <AiOutlineMail/>
    return (
        <div className={`${style.bgprimary} row`}>
            <div className=" col p-5 my-5">
                <div className="mx-5">
                    <h2>Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users</h2>
                    <p className='mt-5'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <div className="formcontrol d-flex flex-column my-5">
                        <Input placeholder='Enter your username' type='text'className={`${style.inp} mt-5`}/>
                        <Input placeholder='Enter your email' type='emal' className={`${style.inp} mt-5`}/>
                        <Input placeholder='Enter your password' type='password' className={`${style.inp} my-5`}/>
                        <Button className='mt-5 btn btn-primary'>Signup</Button>
                        <p className='text-center pt-5'>Already have an account? Let’s Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightForm
