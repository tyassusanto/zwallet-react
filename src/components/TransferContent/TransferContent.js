import React, {useEffect, useState} from 'react'
import Input from '../base/Input/Input'
import styles from './transfercontent.module.css'
import ReceiverCard from '../ReceiverCard/ReceiverCard'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const TransferContent = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const querySearch = searchParams.get('name')
    // useEffect(() => {
    //     setIsloading(true)
    //     axios.get(`${process.env.REACT_APP_API_BACKEND}/admin/allusers`)
    //     .then((res)=>{
    //         // console.log(res.data.data);
    //         setIsloading(false)
    //         const result = res.data.data
    //         setUsers(result)
    //     })
    //     .catch((err) => {
    //         setIsloading(false)
    //         console.log(err.reponse);
    //     })
    // },[])

useEffect(() => {
    if(querySearch){
        axios.get(`${process.env.REACT_APP_API_BACKEND}/admin/allusers?name=${querySearch}`)
                .then((res)=>{
                    // console.log(res.data.data);
                    setIsloading(false)
                    const result = res.data.data
                    setUsers(result)
                })
                .catch((err) => {
                    setIsloading(false)
                    console.log(err.reponse);
                })
    }else{
        setIsloading(true)
        axios.get(`${process.env.REACT_APP_API_BACKEND}/admin/allusers`)
        .then((res)=>{
            // console.log(res.data.data);
            setIsloading(false)
            const result = res.data.data
            setUsers(result)
        })
        .catch((err) => {
            setIsloading(false)
            console.log(err.reponse);
        })
    }
},[querySearch])

    const handleSearch = (e) => {
        // console.log(e.target.value);
        // console.log(e.keyCode);
        if(e.keyCode === 13) {
            setSearchParams({name : e.target.value})
        }
    }
    // console.log('users : ', users);
    return (

        <div className='bg-white borad shadow d-flex  flex-column container p-4 w-100 ms-3 me-5'>
            <div className="search-receiver w-100">
                <h5>Search Receiver</h5>
                <Input
                // onChange={handleSearch}
                onKeyUp={handleSearch}
                placeholder='Search receiver here'
                className={`${styles.inpsearch} w-100 px-5 py-2`
                
                }/>
            </div>
            
            <div className="receiver-list my-3">
                {isLoading && <p>Loading...</p> }
                {users.map((user) => (
                        <ReceiverCard
                        onClick={()=>navigate(`/transfer/${user.id}`)}
                        name={user.name}
                        phone={user.phone}
                        photo={'https://squareoffs.com/assets/SOProfile-cb5798a284da490e620ff00069f852bc690799e2af53b40c7e2f03209dd8a3e5.svg'}
                        />
                ))}
            </div>
        </div>
    )
}

export default TransferContent
