import React from 'react'
import VodItem from './vodItem';
function VodList(props) {
   console.log("props from List items: "+props)
  return (
    <div className='container-fluid py-5'>
      <div className='container'>
        <h2>List image</h2>
        <div className='row' >
       { props.imgArr.map((item,index)=>(<VodItem key={index} obj={item} />)) }
        </div>
      </div>
    </div>
  )
}

export default VodList
{/* <BrowserRouter>
<Routes>
  <Router path="/"></Router>
  <Router></Router>
  <Router></Router>
</Routes>
<Footer />
</BrowserRouter> */}