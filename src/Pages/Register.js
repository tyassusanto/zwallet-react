import React from 'react'
import LeftBanner from '../components/LeftBaner/LeftBanner'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const Register = () => {
    return (
        <div className='container-fuild'>
            <div className="d-flex">
                <LeftBanner/>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default Register
