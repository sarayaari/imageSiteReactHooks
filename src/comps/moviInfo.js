import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function MoviInfo() {

    const nav = useNavigate();
    const [params]=useSearchParams ();
    alert(params.get("id"))
    let  searchId=params.get("id")||2295434;
  



     let [image, setImage]=useState();



     const doApi=async()=>{
        axios.get(`https://pixabay.com/api/?key=36523029-b6fc011bf7a78937125fffbe0&id=${searchId}`)
        .then(response => {
            // setImage(response.data);
            console.log(response.data.hits);
        })
        .catch(error => {
          console.log("sory but you have a problem"+error);
        });
     }
    useEffect(()=>{
        doApi();
    },[])
    const onClickBack = () => {
        nav(-1);
    }
    const id = 8;
    const img = "https://pixabay.com/get/gf5a34ccfe380eb11336643d8ea57728c3b44d11d4ebeee6d4b9f995fc982cd578042cdd11203e63b6bfba0e417415c26954f8058c4443bf00c7f24e33d670889_640.jpg";

    return (
        <div className='container text-center p-2'>
            <image src={img} className='col-md-2 ' alt="flower"></image>
            <p>info: info</p>
            <p>info2:info2</p>
            <button onClick={onClickBack}>back to list</button>
        </div>
    )
}
