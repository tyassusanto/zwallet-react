import React, {useEffect, useState} from 'react'
import Input from '../base/Input/Input'
import styles from './transfercontent.module.css'
import ReceiverCard from '../ReceiverCard/ReceiverCard'
import axios from 'axios'

const TransferContent = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsloading] = useState(false)
    useEffect(() => {
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
    },[])
    console.log('users : ', users);
    return (

        <div className='bg-white borad shadow d-flex  flex-column container p-4 w-100 ms-3 me-5'>
            <div className="search-receiver w-100">
                <h5>Search Receiver</h5>
                <Input placeholder='Search receiver here' className={`${styles.inpsearch} w-100 px-5 py-2`}/>
            </div>
            
            <div className="receiver-list my-3">
                {isLoading && <p>Loading...</p> }
                {users.map((user) => (
                    <ReceiverCard
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
