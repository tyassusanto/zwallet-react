import React, { useState } from 'react'
import Input from '../base/Input/Input'
import Button from '../base/Button/Button'
import style from './rightform.module.css'
import axios from 'axios'


const RightForm = () => {
    const [form, setForm] = useState({
        username : '',
        password : ''
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleClick = () => {
        setLoading(true)
        axios.post('https://zwallet-hello.herokuapp.com/users/login',
        {
            username: '1111', 
            password: '1111'
        })
        .then((res)=>{
            setLoading(false)
            console.log('masuk');
        })
        .catch((err)=>{
            setLoading(false)
            console.log('gagal');
        })
    }
    return (
        <div className={`${style.bgprimary} row`}>
            <div className=" col p-5 my-5">
                <div className="mx-5">
                    <h2>Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users</h2>
                    <p className='mt-5'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <div className="formcontrol d-flex flex-column my-5">
                        <Input
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                        placeholder='Enter your username'
                        type='email'
                        className={`${style.inp} mt-5`}
                        />
                        <Input name='password'
                        onChange={handleChange}
                        value={form.password}
                        placeholder='Enter your password'
                        type='password'
                        className={`${style.inp} mt-5`}
                        />
                        <p className='text-end pb-5 mt-3 mb-5'>Forgot Password ?</p>
                        <Button
                        onClick={handleClick}
                        className='btn btn-primary'>
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                        <p className='text-center pt-5'>Dont have an accounnt ?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightForm