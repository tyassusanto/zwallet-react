import React from 'react'
import Button from '../components/base/Button/Button'
import LeftBanner from '../components/LeftBaner/LeftBanner'
import RightForm from '../components/RightForm/RightForm'

const Login = () => {
    return (
        <div className='container-fuild'>
            <div className="d-flex">
                <LeftBanner/>
                <RightForm>
                    <Button className='btn btn-primary'/>
                </RightForm>
            </div>
        </div>
    )
}

export default Login
