import React, { useState } from 'react'
import Input from '../base/Input/Input'
import Button from '../base/Button/Button'
import style from './registerform.module.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import style from '../base/Button/button.module.css'
// import { AiOutlineMail } from 'react-icons/ai'


const RightForm = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const [errorRegister, setErrorRegister] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log(form);
        axios.post(`${process.env.REACT_APP_API_BACKEND}/users/register`, form)
        .then((res) => {
            setLoading(false)
            // console.log('response sukses register', res.data);
            alert('Success Register')
            navigate('/login')
        })
        .catch((err) => {
            setLoading(false)
            if(err.response.status === 403){
                setErrorRegister(err.response.data.errMessage)
            }else{
                setErrorRegister('Internal Server Error')
            }
            console.log('catch', err.response);
        })
    }
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    return (
        <div className={`${style.bgprimary} row`}>
            <div className=" col p-5 my-5">
                <div className="mx-5">
                    <h2>Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users</h2>
                    <p className='mt-5'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    <div className="formcontrol">
                        <form className='d-flex flex-column my-5' onSubmit={handleSubmit}>
                        <Input
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                            placeholder='Enter your username'
                            type='text'
                            className={`${style.inp} mt-5`} />
                        <Input
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                            type='email'
                            className={`${style.inp} mt-5`} />
                        <Input
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
                            type='password'
                            className={`${style.inp} my-5`} />
                            {errorRegister && <p className='text-danger text-center fw-bold'>{errorRegister}</p>}
                        <Button isLoading={loading} type='submit' className='mt-5 btn btn-primary'>Signup</Button>
                        <p className='text-center pt-5'>Already have an account? Let’s <Link to={'/login'} style={{textDecoration:'none'}}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightForm
