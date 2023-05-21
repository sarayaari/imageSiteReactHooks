import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VodList from './vodList'
import VodStrip from './vodStrip'
import "./home.css"


export default function Home() {
   let [myArr,setMyArr]=useState(null);
   let [queryPrams]=useSearchParams();
    let searchQ=queryPrams.get("category")||"sky"
  useEffect(() => {
    doApi(searchQ)
  }, [queryPrams])
  const doApi = async (_searchQ) => {
    let myUrl = `https://pixabay.com/api/?key=36523029-b6fc011bf7a78937125fffbe0&category=${_searchQ}`;
    let resp = await fetch(myUrl)
    let arr = await resp.json();
  console.log("props from home: ");
    console.log(arr.hits);
    setMyArr(arr.hits||myErrArr)
  }
  return (
    <React.Fragment>
      <VodStrip />
     { myArr ? <VodList imgArr= {myArr}/> :<h2>so its struc</h2>}
    </React.Fragment>
  )
}
const myErrArr=[{id:1,user:"11"},{id:2,user:"22"},{id:3,user:"33"},{id:4,user:"44"},{id:5,user:"55"},{id:6,user:"66"}]


 