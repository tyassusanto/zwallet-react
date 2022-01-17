import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const [errorLogin, setErrorLogin] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        console.log(form)
        setLoading(false)
        // console.log('Form : ',form);
            axios.post(`${process.env.REACT_APP_API_BACKEND}/users/login`, form)
        .then((res) => {
            // console.log(res.data);
            setLoading(false)
            console.log(res.data.data)
            alert(res.data.message)
            localStorage.setItem('auth', 1)
            localStorage.setItem('user', JSON.stringify(res.data.data))
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response);
            setLoading(false)
            // console.log(err.response.data.errorMessage)
            // console.log(err.response.status)
            if(err.response.status === 403 ){
                // alert(err.response.data.errorMessage)
                setErrorLogin(err.response.data.errorMessage)
            }else{
                alert('error')
            }
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
                    <div className="formcontrol">
                        <form onSubmit={handleSubmit} className='w-100 d-flex flex-column my-5'>
                        <Input
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                        placeholder='Enter your username'
                        type='text'
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
                        {errorLogin && <p className='text-danger text-center fw-bold'>{errorLogin}</p>}
                        <Button type='submit' onClick={handleClick} isLoading={loading} className='btn btn-primary'>Login</Button>
                        <p className='text-center pt-5'>Dont have an accounnt ?</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightForm
