import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function MoviInfo() {


    let [item, setItem] = useState(null);
    const [params] = useSearchParams();
    const nav = useNavigate();
    let searchId = params.get("id") || 2295434;

    const onClickBack = () => {
        nav(-1);
    }

    const doApi = async () => {
        axios.get(`https://pixabay.com/api/?key=36523029-b6fc011bf7a78937125fffbe0&id=${searchId}`)
            .then(response => {
                setItem(response.data.hits[0]);
                 console.log("this image:")
                console.log(response.data.hits[0].webformatURL);
            })
            .catch(error => {
                console.log("sory but you have a problem" + error);
            });
    }

    useEffect(() => {
        doApi();
    }, [])

   

    return (
        <div className='container text-center p-2'>
            {item? <div className='container'>
            <img src={item.webformatURL} className=' me-4 rounded d-block' alt="flower"></img>
            
            <p>id: {item.id}</p>
            <p>info2:info2</p>
            </div>:
            <p>louding...</p>}
            <button onClick={onClickBack}>back to list</button>
        </div>
    )
}
